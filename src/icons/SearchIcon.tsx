import React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

const SearchIcon = (props: SvgProps) => {
  return (
    <Svg
      width={40}
      height={41}
      fill="none"
      {...props}
    >
      <Rect
        x={0.5}
        y={-0.5}
        width={39}
        height={39}
        rx={7.5}
        transform="matrix(1 0 0 -1 0 39.375)"
        fill="#1A4EA2"
        stroke="#1A4EA2"
      />
      <Path
      d="M17.837 11.725a6.487 6.487 0 1 0 0 12.975 6.487 6.487 0 0 0 0-12.975Zm-8.65 6.487a8.65 8.65 0 1 1 15.483 5.304l5.825 5.825a1.081 1.081 0 0 1-1.53 1.529l-5.824-5.825a8.65 8.65 0 0 1-13.954-6.833Z"
      fill="#fff"
      />
    </Svg>
  );
};

export default SearchIcon;