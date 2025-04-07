import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HeartOff = (props: SvgProps) => (
  <Svg viewBox="0 -0.5 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M28 13.682 16 28 4 13.623c-1.435-1.994-2-3.341-2-5.185 0-3.439 2.455-6.534 6-6.563 2.916-.024 6.222 2.954 8 5.199 1.731-2.166 5.084-5.199 8-5.199 3.451 0 6 3.124 6 6.563 0 1.844-.447 3.291-2 5.244ZM24 0c-3.333 0-5.855 1.956-8 4-2.043-2.169-4.667-4-8-4-4.694 0-8 4.036-8 8.438 0 2.361.967 4.061 2.026 5.659l12.433 14.906c1.395 1.477 1.659 1.477 3.054 0l12.461-14.906C31.22 12.499 32 10.799 32 8.438 32 4.036 28.694 0 24 0Z"
    />
  </Svg>
);
export default HeartOff;
