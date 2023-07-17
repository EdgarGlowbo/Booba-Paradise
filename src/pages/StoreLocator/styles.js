import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors, fonts } from "../../variables";

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
    backgroundColor: colors.location.primary,
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 16,
    zIndex: 1,
  },
  icon: {
    color: colors.background,
    height: 32,
    width: 32,
  },
  text: {
    fontFamily: fonts.body,
    fontSize: 18,
    color: colors.location.bodyText,
  },
});

export default styles;
