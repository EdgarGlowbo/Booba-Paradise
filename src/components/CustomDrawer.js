import React from "react";
import { View } from "react-native";

import CustomHeader from "./TopBar/CustomHeader";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { spacing } from "../variables";

const CustomDrawer = (props) => {
  return (
    <View>
      <CustomHeader />
      <DrawerContentScrollView {...props} style={styles.container}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const { space1000 } = spacing;
const styles = StyleSheet.create({
  container: {
    paddingTop: space1000,
  },
});

export default CustomDrawer;
