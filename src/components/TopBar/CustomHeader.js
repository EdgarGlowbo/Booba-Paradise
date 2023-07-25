import React from "react";
import { View, StyleSheet } from "react-native";
import BurgerMenu from "./BurgerMenu";
import BrandName from "./BrandName";
import LocationPin from "./LocationPin";
import { dimensions, spacing } from "../../variables";

const CustomHeader = ({ backgroundColor = null }) => {
  return (
    <View style={[styles.topBar, backgroundColor && backgroundColor]}>
      <BurgerMenu />
      <BrandName />
      <LocationPin />
    </View>
  );
};

const { size1000 } = dimensions;
const { space150 } = spacing;
const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: size1000,
    justifyContent: "space-between",
    padding: space150,
    backgroundColor: "transparent",
  },
});

export default CustomHeader;
