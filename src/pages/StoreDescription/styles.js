import { StyleSheet } from "react-native";
import { colors } from "../../variables";

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
  },
  icon: {
    height: 24,
    width: 24,
    color: colors.bottomTabIcon,
  },
});

export default styles;
