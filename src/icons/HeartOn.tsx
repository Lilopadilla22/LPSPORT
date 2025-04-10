import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';


const HeartOn = (props: SvgProps) => (
  <Svg viewBox="0 -1 32 32" {...props}>
    <Path
      fill="#469b89"
      fillRule="evenodd"
      d="M24 0c-3.333 0-6.018 1.842-8.031 4.235C14.013 1.76 11.333 0 8 0 3.306 0 0 4.036 0 8.438c0 2.361.967 4.061 2.026 5.659l12.433 14.906c1.395 1.309 1.659 1.309 3.054 0l12.461-14.906C31.22 12.499 32 10.799 32 8.438 32 4.036 28.694 0 24 0"
    />
  </Svg>
);
export default HeartOn;
