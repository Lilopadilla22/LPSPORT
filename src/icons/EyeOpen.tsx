import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const EyeOpen = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G stroke="#000" strokeWidth={1.5}>
      <Path d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20c-4.182 0-7.028-2.5-8.725-4.704Z" />
      <Path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </G>
  </Svg>
);
export default EyeOpen;
