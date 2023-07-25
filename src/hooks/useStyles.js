import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";

const useStyles = () => {
  const { width, height } = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      height: height,
    },
  });
};

export default useStyles;
