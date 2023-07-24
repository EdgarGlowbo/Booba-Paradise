import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors, fonts } from "../../variables";

const { background, primary, secondary, accent, text, primaryS1, secondaryT1 } =
  colors.landing;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * (2 / 3),
    resizeMode: "cover",
    paddingTop: 74,
  },
  presentationHeading: {
    fontFamily: fonts.headings,
    fontSize: 32,
    color: background,
  },
  presentationBody: {
    fontFamily: fonts.body,
    fontSize: 18,
    color: background,
    textAlign: "center",
    marginBottom: 12,
  },
  presentationContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginHorizontal: 12,
  },
  image: {
    position: "relative",
    width: 400,
    height: 400,
    bottom: -50,
  },
  newsContainer: {
    backgroundColor: secondaryT1,
    width: Dimensions.get("screen").width,
    minHeight: 400,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  transition: {
    zIndex: 1,
    marginTop: -40,
  },
  newsFeed: {
    gap: 16,
  },
  newsFeedHeader: {
    fontFamily: fonts.newsFeedHeader,
    color: primary,
    fontSize: 24,
    marginBottom: 50,
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

export default styles;
