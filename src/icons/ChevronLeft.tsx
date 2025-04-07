import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChevronLeft = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill={props?.fill ?? '#061730'}
      d="M12.2559 4.41074C12.5814 4.73618 12.5814 5.26382 12.2559 5.58925L7.84518 10L12.2559 14.4107C12.5814 14.7362 12.5814 15.2638 12.2559 15.5893C11.9305 15.9147 11.4028 15.9147 11.0774 15.5893L6.07741 10.5893C5.75198 10.2638 5.75198 9.73618 6.07741 9.41074L11.0774 4.41074C11.4028 4.08531 11.9305 4.08531 12.2559 4.41074Z"
    />
  </Svg>
);

export default ChevronLeft;
