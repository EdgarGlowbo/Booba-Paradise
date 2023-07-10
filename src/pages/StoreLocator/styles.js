import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    // justifyContent: "center",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: "100%",
  },
});

export default styles;
