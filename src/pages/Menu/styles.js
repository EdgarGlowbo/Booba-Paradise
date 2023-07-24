import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts } from "../../variables";

const { background, primaryS1 } = colors.menu;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  header: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * (1 / 2),
    overflow: "hidden",
  },
  backgroundImg: {
    flex: 1,
    paddingTop: 74,
    resizeMethod: "resize",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerTextContainer: {
    margin: 16,
    rowGap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: fonts.headings,
    fontSize: 32,
    color: background,
  },
  headerDesc: {
    fontFamily: fonts.body,
    fontSize: 18,
    color: background,
    textAlign: "center",
  },
  headerImg: {
    position: "relative",
    height: 600,
    width: 900,
    resizeMode: "cover",
    bottom: -130,
  },
  menuContainer: {
    backgroundColor: background,
    paddingHorizontal: 8,
  },
  footer: {
    backgroundColor: primaryS1,
  },
});

export default styles;
