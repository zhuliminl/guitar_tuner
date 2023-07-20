import React from 'react';
import { Dimensions } from 'react-native';
import { create } from 'zustand';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
  style1 = 'style1',
}

interface ThemeState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const useThemeStore = create<ThemeState>((set, get) => ({
  theme: ThemeType.light,
  // theme: ThemeType.dark,
  setTheme: theme => {
    set({
      theme,
    });
  },
}));

export const useThemeType = () => {
  const theme = useThemeStore(state => state.theme);
  return theme;
};

export const useSetTheme = () => {
  const set = useThemeStore(state => state.setTheme);
  return set;
};

export const getWindowWidth = () => {
  return Dimensions.get('window').width;
};
export const usePt = () => {
  const windowWidth = getWindowWidth();
  return (value: number) => (value * windowWidth) / 375;
};

const scale = 4;
export const useThemeStyle = () => {
  const $pt = usePt();
  const windowWidth = getWindowWidth();
  const themeType = useThemeType();
  let style = {
    bgColorPrimary: '#EEE',
    bgColorSecondary: '#FFF',

    scale,
    windowWidth,
    colorBrand: '#8f432e',
    colorBrandSecond: '#8f432e',
    colorDivide: '#999',
    colorSuccess: 'red',
    colorWarning: 'yellow',
    colorInfo: '#999',
    colorToastBg: '#222',
    shoadowStyle1: {},
    showdowStyle2: {},
    showdowStyle3: {},
    fontColorPrimary: '#222',
    fontColorSecond: '#444',
    fontColorTertiary: '#666',
    fontColorQuaternary: '#999',
    fontSizeSuper: 50,
    fontSizeUltra: 40,
    fontSizeLarge: 30,
    fontSizeDefault: 15,
    fontSizeTitle: 20,
    fontSizeDesc: 13,
    fontSizeSmalll: 12,
    borderRadiusSmall: scale,
    borderRadiusMiddle: scale * 2,
    borderRadiusLarge: scale * 3,
    borderRadiusUltra: scale * 4,
    sizeToastHeight: scale * 12,
    sizeTabHeight: scale * 16,
    sizeCellHeight: scale * 11,
    sizeHeaderHeight: scale * 12,
    sizeIconSmallHeight: scale * 4,
    sizeIconMiddleHeight: scale * 6,
    sizePagePadding: scale * 4,
    sizeCardPadding: scale * 4,
    sizeTitlePadding: scale * 2,
    sizeTagPadding: scale * 1,
    sizeTextPadding: scale * 1,
    sizeFullButtonWidth: $pt(375 - 44),
    sizeFullButtonHeight: scale * 11,
  };

  if (themeType === ThemeType.dark) {
    style.bgColorPrimary = '#111';
    style.bgColorSecondary = '#333';

    style.fontColorPrimary = '#FFF';
    style.fontColorSecond = '#FFF';
    style.fontColorTertiary = '#FFF';
    style.fontColorQuaternary = '#FFF';
    style.colorDivide = 'red';
  }

  return style;
};
