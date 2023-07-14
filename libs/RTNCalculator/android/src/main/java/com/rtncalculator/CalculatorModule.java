package com.rtncalculator;


import android.annotation.SuppressLint;
import android.media.AudioFormat;
import android.media.AudioRecord;
import android.media.MediaRecorder;
import android.os.Build;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class CalculatorModule extends NativeCalculatorSpec {
    private static AudioRecord audioRecord;
    private final ReactApplicationContext reactContext;
    private DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter;
    private boolean running;
    private int bufferSize;
    private Thread recordingThread;

    public static String NAME = "RTNCalculator";
    public static String TAG = "RTNCalculator";

    CalculatorModule(  ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override
    public void add(double a, double b, Promise promise) {
        promise.resolve(a + b);
    }

    @Override
    public String getModuleName() {
        return null;
    }

    @SuppressLint("MissingPermission")
    @Override
    public void init(ReadableMap options) {
        if (eventEmitter == null) {
            eventEmitter = reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }

        if (running || (recordingThread != null && recordingThread.isAlive())) {
            return;
        }

        if (audioRecord != null) {
            // fixme
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.CUPCAKE) {
                audioRecord.stop();
                audioRecord.release();
            }
        }

        // for parameter description, see
        // https://developer.android.com/reference/android/media/AudioRecord.html

        int sampleRateInHz = 44100;
        if (options.hasKey("sampleRate")) {
            sampleRateInHz = options.getInt("sampleRate");
        }

        int channelConfig = AudioFormat.CHANNEL_IN_MONO;
        if (options.hasKey("channelsPerFrame")) {
            int channelsPerFrame = options.getInt("channelsPerFrame");

            // every other case --> CHANNEL_IN_MONO
            if (channelsPerFrame == 2) {
                channelConfig = AudioFormat.CHANNEL_IN_STEREO;
            }
        }

        // we support only 8-bit and 16-bit PCM
        int audioFormat = AudioFormat.ENCODING_PCM_16BIT;
        if (options.hasKey("bitsPerChannel")) {
            int bitsPerChannel = options.getInt("bitsPerChannel");

            if (bitsPerChannel == 8) {
                audioFormat = AudioFormat.ENCODING_PCM_8BIT;
            }
        }

        if (options.hasKey("bufferSize")) {
            this.bufferSize = options.getInt("bufferSize");
        } else {
            this.bufferSize = 8192;
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.CUPCAKE) {
            audioRecord = new AudioRecord(
                    MediaRecorder.AudioSource.MIC,
                    sampleRateInHz,
                    channelConfig,
                    audioFormat,
                    this.bufferSize * 2);
        }

        recordingThread = new Thread(new Runnable() {
            public void run() {
                recording();
            }
        }, "RecordingThread");

    }
    private void recording() {
        Log.d(TAG, "recording: run");
        short buffer[] = new short[bufferSize];
        while (running && !reactContext.getCatalystInstance().isDestroyed()) {
            WritableArray data = Arguments.createArray();
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.CUPCAKE) {
                audioRecord.read(buffer, 0, bufferSize);
            }
            for (float value : buffer) {
                data.pushInt((int) value);
            }
            Log.d(TAG, "recording: -------->>>>>", (Throwable) data);
            eventEmitter.emit("recording", data);
        }
    }

    @Override
    public void start() {
        Log.d(TAG, "recording: start1");
        if (!running && audioRecord != null && recordingThread != null) {
            Log.d(TAG, "recording: start2");
            running = true;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.CUPCAKE) {
                Log.d(TAG, "recording: start3");
                audioRecord.startRecording();
            }
            Log.d(TAG, "recording: start");
            recordingThread.start();
        }
    }

    @Override
    public void stop() {
        if (audioRecord != null) {
            running = false;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.CUPCAKE) {
                audioRecord.stop();
                audioRecord.release();
            }
            audioRecord = null;
        }

    }

    @Override
    public void addRecordingEventListener(Callback callback) {
        callback.invoke("saul");
    }
}