import { Dimensions } from 'react-native';
import { create } from 'zustand';

export enum ThemeType {
  light = '默认',
  dark = '暗黑',
  style1 = '样式1',
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
interface ThemeStyleOptions {
  targetTheme: ThemeType;
}
export const useThemeStyle = (options?: ThemeStyleOptions) => {
  const $pt = usePt();
  const windowWidth = getWindowWidth();
  let themeType = useThemeType();

  if (options?.targetTheme) {
    themeType = options.targetTheme;
  }

  let style = {
    // bgColorPrimary: '#FAFAFA',
    bgColorPrimary: 'rgba(250,250,250,1)',
    bgColorSecondary: '#FFF',
    bgColorTertiary: '#EEE',

    scale,
    windowWidth,
    colorBrand: '#8f432e',
    colorBrandSecond: '#8f432e',
    colorIcon: '#C8C8C8',
    colorBorder: '#999',
    colorDivide: '#EEE',
    colorSuccess: 'red',
    colorSafe: '#22c45c',
    colorWarning: 'yellow',
    colorInfo: '#999',
    colorToastBg: '#222',
    shadowStyle1: {
      startColor: '#00000010',
    },
    shadowStyle2: {
      startColor: '#00000006',
    },
    shadowStyle3: {
      startColor: '#00000004',
    },
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
    sizeCellHeight: scale * 12,
    sizeHeaderHeight: scale * 14,
    sizeIconSmallHeight: scale * 4,
    sizeIconMiddleHeight: scale * 6,
    sizePagePadding: scale * 6,
    sizeCardPadding: scale * 4,
    sizeTitlePadding: scale * 2,
    sizeTagPadding: scale * 1,
    sizeTextPadding: scale * 1,
    sizeFullButtonWidth: $pt(375 - 44),
    sizeFullButtonHeight: scale * 11,
  };

  if (themeType === ThemeType.dark) {
    style.bgColorPrimary = 'rgba(17,17,17,1)';
    style.bgColorSecondary = '#333';
    style.bgColorTertiary = '#444';

    style.fontColorPrimary = '#FFF';
    style.fontColorSecond = '#EEE';
    style.fontColorTertiary = '#DDD';
    style.fontColorQuaternary = '#AAA';
    style.colorDivide = '#222';
  }

  if (themeType === ThemeType.style1) {
    style.bgColorPrimary = 'rgba(34,34,34,1)';
    style.bgColorSecondary = '#444';
    style.bgColorTertiary = '#555';

    style.fontColorPrimary = '#FFF';
    style.fontColorSecond = '#EEE';
    style.fontColorTertiary = '#DDD';
    style.fontColorQuaternary = '#AAA';
    style.colorDivide = '#333';
  }

  return style;
};
