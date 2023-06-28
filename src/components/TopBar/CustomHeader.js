import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BurgerMenu from "./BurgerMenu";
import BrandName from "./BrandName";
import LocationPin from "./LocationPin";

const CustomHeader = () => {
  return (
    <View style={styles.topBar}>
      <BurgerMenu />
      <BrandName />
      <LocationPin />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "transparent",
  },
});

export default CustomHeader;
