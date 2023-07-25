import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors, fontSizes, fonts } from "../../variables";

const { background, primary } = colors.storeLocator;
const { bodyText } = fonts;
const { large450 } = fontSizes;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  map: {
    width: Dimensions.get("screen").width,
    height: "100%",
  },
  directionsBtn: {
    alignSelf: "center",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: 84,
    backgroundColor: primary,
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 16,
    zIndex: 1,
  },
  icon: {
    color: background,
    height: 32,
    width: 32,
  },
  text: {
    fontFamily: bodyText,
    fontSize: large450,
    color: background,
  },
});

export default styles;
