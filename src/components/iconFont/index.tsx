import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import defaultSvgs from './svg';
import { Theme } from '../../utils/Theme';
import { ViewStyle } from 'react-native';

export interface IProps {
  /**
   * 颜色
   */
  fill?: string | string[];
  /**
   * 宽
   */
  width?: number;
  /**
   * 高
   */
  height?: number;
  /**
   * 尺寸（宽高相等）
   */
  size?: number;
  /**
   * 图标名
   */
  name?: keyof typeof defaultSvgs;
  /**
   * 自定义样式
   */
  style?: ViewStyle;
  /**
   * 自定义矢量图标
   */
  d?: string | string[];
}

/**
 * 矢量图标
 * ```typescript
 * <IconFont
 *   size={24}
 *   fill={'#333'}
 *   name={'close'}
 * />
 * ```
 */
const Index: FC<IProps> = ({
  style = {},
  width: _width = null,
  height: _height = null,
  size = 24,
  name = null,
  fill = Theme.colorInfo,
  d: _d = null,
}) => {
  const width = _width || size;
  const height = _height || size;
  let d = !!name ? defaultSvgs[name] || _d : _d;

  if (!d) {
    return null;
  }

  const dArray = typeof d === 'string' ? [d] : d;
  const fillArr = typeof fill === 'string' ? [fill] : fill;
  if (dArray.length === 0) {
    return null;
  }
  return (
    <Svg
      class="icon"
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      style={style}>
      {dArray.map((path, i) => {
        const color = fillArr[i] || fillArr[0];
        return <Path key={i} d={path} fill={color} />;
      })}
    </Svg>
  );
};

export default Index;
