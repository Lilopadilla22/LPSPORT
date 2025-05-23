import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SearchIcon = (props: SvgProps) => {
  return (
    <Svg width={18} height={17} fill="none" {...props}>
      <Path
        d="m15.441 16.645-5.168-5.156a5.635 5.635 0 0 1-3.507 1.197c-1.676 0-3.094-.58-4.255-1.738C1.349 9.79.768 8.373.768 6.7s.581-3.088 1.743-4.248C3.67 1.294 5.09.715 6.767.715c1.676 0 3.095.58 4.257 1.737 1.16 1.16 1.741 2.575 1.741 4.248a5.602 5.602 0 0 1-1.2 3.5l5.191 5.18c.17.168.254.375.254.62 0 .246-.092.461-.277.645a.876.876 0 0 1-.646.253.876.876 0 0 1-.646-.253Zm-8.674-5.801c1.153 0 2.134-.403 2.942-1.208.807-.806 1.21-1.785 1.21-2.936 0-1.15-.403-2.13-1.21-2.935C8.9 2.959 7.92 2.557 6.767 2.557c-1.154 0-2.134.402-2.942 1.208-.807.806-1.21 1.784-1.21 2.935s.403 2.13 1.21 2.936c.808.805 1.788 1.208 2.942 1.208Z"
        fill={props?.fill ?? '#469b89'}
      />
    </Svg>
  );
};

export default SearchIcon;
