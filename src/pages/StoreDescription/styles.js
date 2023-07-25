import { StyleSheet } from "react-native";
import { colors, fontSizes, fonts } from "../../variables";

const { background, secondary, text, open, closed } = colors.storeDesc;
const { h1Text, bodyText } = fonts;
const { regular400, large450, small300 } = fontSizes;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 74,
    backgroundColor: background,
    flex: 1,
  },
  goBackBtnContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 16,
    alignItems: "flex-end",
  },
  row: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  icon: {
    height: 24,
    width: 24,
    color: secondary,
    marginRight: 12,
  },
  caretRight: {
    color: text,
  },
  clock: {
    alignSelf: "flex-start",
  },
  crossGoBack: {
    color: text,
    margin: 0,
  },
  boobaPin: {
    height: 48,
    width: 48,
  },
  businessName: {
    fontFamily: h1Text,
    fontSize: large450,
  },
  businessHoursContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  statusContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusMessage: {
    color: colors.text,
  },
  open: {
    color: open,
  },
  closed: {
    color: closed,
  },
  businessHoursTable: {
    width: "100%",
  },
  businessRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    fontFamily: bodyText,
    fontSize: regular400,
    color: text,
  },
  textBold: {
    fontFamily: h1Text,
    fontSize: small300,
    color: text,
  },
  today: {
    textShadowColor: "black",
    textShadowOffset: 0,
    textShadowRadius: 1,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  directionsBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingLeft: 0,
    columnGap: 5,
  },
});

export default styles;
