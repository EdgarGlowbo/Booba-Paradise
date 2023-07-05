import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts } from "../../variables";

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
    // backgroundPosition: "center",
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
    color: colors.background,
  },
  headerDesc: {
    fontFamily: fonts.body,
    fontSize: 18,
    color: colors.background,
    textAlign: "center",
  },
  headerImg: {
    position: "relative",
    height: 600,
    width: 900,
    resizeMode: "cover",
    bottom: -130,
  },
});

export default styles;
