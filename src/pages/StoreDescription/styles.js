import { StyleSheet } from "react-native";
import { colors, fonts } from "../../variables";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 74,
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
    color: colors.bottomTabIcon,
    marginRight: 12,
  },
  clock: {
    alignSelf: "flex-start",
  },
  boobaPin: {
    height: 48,
    width: 48,
  },
  businessName: {
    fontFamily: fonts.bottomTabBold,
    fontSize: 22,
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
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.text,
  },
  textBold: {
    fontFamily: fonts.bottomTabBold,
    fontSize: 16,
    color: colors.text,
  },
  serviceItem: {
    flexDirection: "row",
    marginRight: 8,
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
