import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import BurgerMenu from "./BurgerMenu";
import BrandName from "./BrandName";
import LocationPin from "./LocationPin";

const CustomHeader = ({ backgroundColor = null }) => {
  return (
    <View
      style={[
        styles.topBar,
        backgroundColor && {
          backgroundColor: backgroundColor,
        },
      ]}
    >
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
    width: Dimensions.get("screen").width,
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "transparent",
  },
});

export default CustomHeader;
