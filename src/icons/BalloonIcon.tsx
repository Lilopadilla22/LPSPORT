import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BalloonIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M256 46.554c-115.98 0-210 94.021-210 210 11.061 278.562 408.981 278.483 420 0 0-115.979-94.02-210-210-210Zm13.131 64.082 43.345-28.863a184.32 184.32 0 0 1 92.236 67.287l-13.982 49.886-68.466 21.944-53.133-39.051Zm-69.604-28.863 43.354 28.868v71.192l-53.14 39.057-68.47-21.949-13.98-49.883a184.294 184.294 0 0 1 92.236-67.285Zm-91.7 282.996a182.38 182.38 0 0 1-35.564-108.468l40.94-32.383 68.416 21.932 20.411 63.548-42.348 57.492Zm205.225 66.354c-35.609 12.139-78.5 12.137-114.109-.001l-18.068-48.736 42.408-57.574h65.437l42.4 57.576Zm91.119-66.353-51.855 2.122-42.342-57.493 20.414-63.55 68.41-21.927 40.94 32.381a182.364 182.364 0 0 1-35.567 108.468Z" />
  </Svg>
);
export default BalloonIcon;
