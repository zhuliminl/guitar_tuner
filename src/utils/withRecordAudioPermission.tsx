import { PERMISSIONS, PermissionStatus, check } from 'react-native-permissions';

export default (call: (status: PermissionStatus) => void) => {
  check(PERMISSIONS.ANDROID.RECORD_AUDIO)
    .then((result: PermissionStatus) => {
      console.log('saul withPermissionStatus', result);
      call(result);
    })
    .catch(error => {
      console.log('saul withPermissionError', error);
    });
};
