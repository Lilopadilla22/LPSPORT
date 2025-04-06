import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const AccountIcon = ({ fill = '#000', ...props }: SvgProps) => {
  return (
    <Svg width={23} height={24} fill="none" {...props}>
      <Path
        d="M11.5 3.066a4.701 4.701 0 1 0 0 9.402 4.701 4.701 0 0 0 0-9.402Zm-7.052 4.7a7.052 7.052 0 1 1 14.104 0 7.052 7.052 0 0 1-14.104 0Zm2.35 10.785a3.526 3.526 0 0 0-3.525 3.526 1.175 1.175 0 0 1-2.351 0 5.877 5.877 0 0 1 5.877-5.876H16.2a5.877 5.877 0 0 1 5.877 5.876 1.175 1.175 0 0 1-2.35 0 3.526 3.526 0 0 0-3.527-3.526H6.8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default AccountIcon;
