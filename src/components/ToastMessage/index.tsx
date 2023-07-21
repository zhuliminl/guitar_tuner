import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { create } from 'zustand';
import { useThemeStyle } from '../../hooks/useTheme';
import { Shadow } from 'react-native-shadow-2';

export enum ToastType {
  Info = 1,
  Error = 2,
  Success = 3,
  Fail = 4,
  Warning = 5,
}

interface ToastState {
  type: ToastType;
  isShow: boolean;
  timer: any;
  message: string;
  showToast: (msg: string, type?: ToastType | undefined) => void;
  closeToast: () => void;
}

const useToastStore = create<ToastState>((set, get) => ({
  type: ToastType.Info,
  isShow: false,
  timer: 0,
  message: '',
  showToast: (msg: string, type = ToastType.Info) => {
    set({
      type: type,
      isShow: true,
      message: msg,
    });

    if (get().timer) {
      clearTimeout(get().timer);
    }
    const timer = setTimeout(() => {
      get().closeToast();
    }, 2000);
    set({
      timer,
    });
  },
  closeToast: () => {
    set({
      isShow: false,
      message: '',
      type: ToastType.Info,
    });
  },
}));

export const useToast = () => {
  const showToast = useToastStore(state => state.showToast);
  return (s: string, t?: ToastType) => {
    showToast(s, t);
  };
};

export default () => {
  const value = useRef(new Animated.Value(0)).current;
  const isShow = useToastStore(state => state.isShow);
  const type = useToastStore(state => state.type);
  const message = useToastStore(state => state.message);
  const Theme = useThemeStyle();

  useEffect(() => {
    if (isShow) {
      Animated.spring(value, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(value, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isShow]);

  const tY = value.interpolate({
    inputRange: [0, 1],
    outputRange: [-Theme.sizeToastHeight - 20, 20],
  });

  let iconColor = '#999';
  if (type === ToastType.Info) {
    iconColor = '#999';
  }
  if (type === ToastType.Error) {
    iconColor = 'red';
  }
  if (type === ToastType.Success) {
    iconColor = 'green';
  }
  if (type === ToastType.Fail) {
    iconColor = 'red';
  }
  if (type === ToastType.Warning) {
    iconColor = 'yellow';
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Theme.sizeToastHeight + 30,
        transform: [
          {
            translateY: tY,
          },
        ],
      }}>
      <Shadow
        startColor={'#00000030'}
        distance={15}
        containerStyle={{
          marginLeft: 10,
          borderRadius: Theme.borderRadiusLarge,
          backgroundColor: Theme.colorToastBg,
          width: Theme.windowWidth - 20,
        }}
        style={{
          borderRadius: Theme.borderRadiusLarge,
          height: Theme.sizeToastHeight,
          overflow: 'hidden',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {/* 类型 */}
        {/* 内容 */}
        {/* 关闭 */}
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            width: 20,
            height: 20,
            backgroundColor: iconColor,
          }}></View>
        <Text
          style={{
            color: '#FFF',
            fontSize: Theme.fontSizeDesc,
            flex: 1,
          }}>
          {message}
        </Text>
      </Shadow>
    </Animated.View>
  );
};
