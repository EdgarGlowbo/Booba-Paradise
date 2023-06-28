import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors, fonts } from "../../variables";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  // backgroundImg: {
  //   // zIndex: 1,
  //   width: Dimensions.get("screen").width,
  //   height: Dimensions.get("screen").height * (2 / 3),
  //   resizeMode: "cover",
  // },
  headerContent: {
    // zIndex: 2

    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * (2 / 3),
    resizeMode: "cover",
    paddingTop: 74,
  },
  presentationHeading: {
    fontFamily: fonts.headings,
    fontSize: 32,
    color: colors.background,
  },
  presentationBody: {
    fontFamily: fonts.body,
    fontSize: 18,
    color: colors.background,
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
});

export default styles;
