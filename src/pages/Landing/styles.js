import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors, fonts } from "../../variables";

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
  newsContainer: {
    backgroundColor: colors.newsBackground,
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
    color: colors.primary,
    fontSize: 24,
    marginBottom: 50,
  },
});

export default styles;
