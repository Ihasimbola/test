import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

const AdjustIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 15 15" width={24} height={24} {...props}>
    <G fill="#000">
      <Path d="M9 0H6v2H0v1h6v2h3V3h6V2H9V0ZM5 5H2v2H0v1h2v2h3V8h10V7H5V5ZM13 10h-3v2H0v1h10v2h3v-2h2v-1h-2v-2Z" />
    </G>
  </Svg>
);
export default AdjustIcon;
