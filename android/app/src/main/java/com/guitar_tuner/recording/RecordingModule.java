package com.guitar_tuner.recording;

import android.annotation.SuppressLint;
import android.media.AudioFormat;
import android.media.AudioRecord;
import android.media.MediaRecorder;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

class RecordingModule extends ReactContextBaseJavaModule {
    private static final String TAG = "RecordingModule";
    private static AudioRecord audioRecord;
    private final ReactApplicationContext reactContext;
    private DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter;
    private boolean running;
    private int bufferSize;
    private Thread recordingThread;
    private ReadableMap defaultOptions;

    RecordingModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "Recording";
    }

    @SuppressLint("MissingPermission")
    @ReactMethod
    public void init(ReadableMap options) {
        defaultOptions = options;
        if (eventEmitter == null) {
            eventEmitter = reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }

        if (running || (recordingThread != null && recordingThread.isAlive())) {
            return;
        }

        if (audioRecord != null) {
            audioRecord.stop();
            audioRecord.release();
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

        audioRecord = new AudioRecord(
                MediaRecorder.AudioSource.MIC,
                sampleRateInHz,
                channelConfig,
                audioFormat,
                this.bufferSize * 2);

        recordingThread = new Thread(new Runnable() {
            public void run() {
                recording();
            }
        }, "RecordingThread");
    }

    @ReactMethod
    public void start() {
        if(running) {
            Log.d(TAG, "start: 正在录音");
            Toast.makeText(reactContext,"正在录音", Toast.LENGTH_SHORT).show();
            return;
        }
        if(audioRecord == null || recordingThread == null) {
            init(defaultOptions);
            Log.d(TAG, "start: 重新初始化");
        }
        running = true;
        audioRecord.startRecording();
        recordingThread.start();
    }

    @ReactMethod
    public void stop() {
        if (audioRecord != null) {
            running = false;
            audioRecord.stop();
            audioRecord.release();
            audioRecord = null;
        }
    }

    private void recording() {
        short buffer[] = new short[bufferSize];
        while (running && !reactContext.getCatalystInstance().isDestroyed()) {
            WritableArray data = Arguments.createArray();
            audioRecord.read(buffer, 0, bufferSize);
            for (float value : buffer) {
                data.pushInt((int) value);
            }
            eventEmitter.emit("recording", data);
        }
    }
}