import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../variables";
import CustomHeader from "./TopBar/CustomHeader";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Dimensions } from "react-native";

const CustomDrawer = (props) => {
  return (
    <View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.containerStyle}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  //   topBar: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     width: Dimensions.get("window").width,
  //     justifyContent: "space-between",
  //     padding: 12,
  //   },
  containerStyle: {
    width: "100%",
    backgroundColor: colors.accent,
  },
});

export default CustomDrawer;
