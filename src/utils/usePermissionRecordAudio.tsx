import {
  PERMISSIONS,
  PermissionStatus,
  RESULTS,
  check,
  request,
} from 'react-native-permissions';
import { ToastType, useToast } from '../components/ToastMessage';
import { Platform } from 'react-native';

// 实时权限包裹器
export const usePermissionRecordAudio = () => {
  const showToast = useToast();
  return (call: () => void) => {
    check(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.RECORD_AUDIO
        : PERMISSIONS.IOS.MICROPHONE,
    )
      .then((result: PermissionStatus) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            showToast('权限未找到', ToastType.Fail);
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            showToast('APP 需要您的设备录音权限', ToastType.Warning);
            request(
              Platform.OS === 'android'
                ? PERMISSIONS.ANDROID.RECORD_AUDIO
                : PERMISSIONS.IOS.MICROPHONE,
            )
              .then(res => {
                if (res === RESULTS.GRANTED || res === RESULTS.LIMITED) {
                  call();
                } else {
                  showToast(
                    'APP 需要您的设备录音权限才能正常工作，可在设置页开启录音权限',
                    ToastType.Warning,
                  );
                }
              })
              .catch(error => {
                showToast('出故障了');
                console.log('saul requestPermissionError', error);
              });
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            showToast('---------', ToastType.Warning);
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            call();
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            showToast('权限已关闭', ToastType.Error);
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        showToast('出故障了');
        console.log('saul withPermissionError', error);
      });
  };
};
