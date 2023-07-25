import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";
import { colors } from "../variables";

const { background } = colors.landing;
const useStyles = () => {
  const { width, height } = useWindowDimensions();
  console.log(width);
  return StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: background,
    },
  });
};

export default useStyles;
