import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";
import {
  colors,
  dimensions,
  fonts,
  fontSizes,
  levels,
  radius,
  spacing,
} from "../../variables";

const { background, primary } = colors.storeLocator;
const { bodyText } = fonts;
const { large450 } = fontSizes;
const { space100, space200, space1000 } = spacing;
const { level1 } = levels;
const { size400 } = dimensions;
const { radius800 } = radius;

const useStyles = () => {
  const { width } = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flexDirection: "column",
      width: width,
      flex: 1,
    },
    map: {
      width: "100%",
      height: "100%",
    },
    directionsBtn: {
      alignSelf: "center",
      position: "relative",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      top: space1000,
      marginTop: space100,
      backgroundColor: primary,
      borderRadius: radius800,
      paddingVertical: space100,
      paddingHorizontal: space200,
      zIndex: level1,
    },
    icon: {
      color: background,
      height: size400,
      width: size400,
    },
    text: {
      fontFamily: bodyText,
      fontSize: large450,
      color: background,
    },
    boobaPin: {
      zIndex: level1,
    },
  });
};

export default useStyles;
