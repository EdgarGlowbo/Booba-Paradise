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

const { background, primary, accent, text, primaryS1, secondaryT1 } =
  colors.landing;

const { cursiveHeader, bodyText, h2Text } = fonts;
const { regular400, large600 } = fontSizes;
const { space150, space200, space500, space600, space1000 } = spacing;
const { level1 } = levels;
const useStyles = () => {
  const { width, height } = useWindowDimensions();

  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    headerContent: {
      width: width,
      height: height * (2 / 3),
      resizeMode: "cover",
      paddingTop: space1000,
    },
    presentationHeading: {
      fontFamily: cursiveHeader,
      fontSize: large600,
      color: background,
    },
    presentationBody: {
      fontFamily: bodyText,
      fontSize: regular400,
      color: background,
      textAlign: "center",
      marginBottom: space150,
    },
    presentationContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: space200,
      marginHorizontal: space150,
    },
    newsContainer: {
      backgroundColor: secondaryT1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: space600,
    },
    transition: {
      zIndex: level1,
      marginTop: -space500,
    },
    newsFeed: {
      gap: space200,
    },
    newsFeedHeader: {
      fontFamily: h2Text,
      color: primary,
      fontSize: large600,
      marginBottom: space600,
    },
    newsPanelBackground1: {
      backgroundColor: primary,
    },
    newsPanelBackground2: {
      backgroundColor: accent,
    },
    newsPanelBackground3: {
      backgroundColor: text,
    },
    newsPanelText1: {
      color: background,
    },
    newsPanelText2: {
      color: text,
    },
    newsPanelText3: {
      color: background,
    },
    newsPanelHeader1: {
      color: background,
    },
    newsPanelHeader2: {
      color: background,
    },
    newsPanelHeader3: {
      color: background,
    },
    footer: {
      backgroundColor: primaryS1,
    },
    primaryBtnBackground: {
      backgroundColor: accent,
    },
    primaryBtnTextColor: {
      color: background,
    },
  });
};

export default useStyles;
