import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeType, useSetTheme } from '../hooks/useTheme';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default ({ children }: Props) => {
  const colorTheme = useColorScheme();
  const setTheme = useSetTheme();
  useEffect(() => {
    if (colorTheme === 'light') {
      setTheme(ThemeType.light);
    }
    if (colorTheme === 'dark') {
      setTheme(ThemeType.dark);
    }
  }, [colorTheme]);

  return <>{children}</>;
};
