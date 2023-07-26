import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 320 536.395"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#AEDCD0"
        d="M0 536.395V6.156C21.954 2.863 45.274 0 73.493 0c34.289 0 61.351 4.23 87.525 8.32 21.562 3.37 42.136 6.582 66.27 7.592h31.228c22.342-.936 41.632-3.76 61.484-6.85v527.333H0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h320v536.395H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
