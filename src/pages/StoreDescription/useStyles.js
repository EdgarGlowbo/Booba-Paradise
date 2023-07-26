import { StyleSheet } from "react-native";
import { colors, dimensions, fonts, fontSizes, spacing } from "../../variables";

const { background, secondary, text, open, closed } = colors.storeDesc;
const { h1Text, bodyText } = fonts;
const { regular400, large450 } = fontSizes;
const { space50, space100, space150, space200, space250, space1000 } = spacing;
const { size300, size600 } = dimensions;

const useStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      paddingTop: space1000,
      backgroundColor: background,
      flex: 1,
    },
    row: {
      width: "100%",
      paddingHorizontal: space250,
      marginBottom: space200,
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "row",
    },
    goBackBtnContainer: {
      width: "100%",
      paddingHorizontal: space50,
      marginVertical: space200,
      alignItems: "flex-end",
    },
    icon: {
      height: size300,
      width: size300,
      color: secondary,
      marginRight: space150,
    },
    caretRight: {
      color: text,
    },
    clock: {
      alignSelf: "flex-start",
    },
    crossGoBack: {
      color: text,
      padding: space50,
      margin: 0,
    },
    boobaPin: {
      height: size600,
      width: size600,
    },
    businessName: {
      fontFamily: h1Text,
      fontSize: large450,
      marginLeft: space50,
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
      marginBottom: space50,
    },
    text: {
      fontFamily: bodyText,
      fontSize: regular400,
      color: text,
    },
    servicesTitle: {
      fontFamily: h1Text,
      fontSize: regular400,
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
      marginRight: space150,
    },
    directionsBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: space100,
      paddingLeft: 0,
      columnGap: space50,
    },
  });
};

export default useStyles;
