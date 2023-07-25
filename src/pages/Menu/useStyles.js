import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";
import {
  colors,
  fonts,
  fontSizes,
  spacing,
  dimensions,
  levels,
} from "../../variables";

const { background, primaryS1 } = colors.menu;
const { cursiveHeader, bodyText } = fonts;
const { regular400, large600 } = fontSizes;
const { space100, space200, space1000 } = spacing;

const useStyles = () => {
  const { width, height } = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    header: {
      width: width,
      height: height * (1 / 2),
      overflow: "hidden",
    },
    backgroundImg: {
      flex: 1,
      paddingTop: space1000,
      resizeMethod: "resize",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    headerTextContainer: {
      margin: space200,
      rowGap: space200,
      alignItems: "center",
      justifyContent: "center",
    },
    headerTitle: {
      fontFamily: cursiveHeader,
      fontSize: large600,
      color: background,
    },
    headerDesc: {
      fontFamily: bodyText,
      fontSize: regular400,
      color: background,
      textAlign: "center",
    },
    menuContainer: {
      backgroundColor: background,
      paddingHorizontal: space100,
    },
    footer: {
      backgroundColor: primaryS1,
    },
  });
};

export default useStyles;
