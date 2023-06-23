import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../Menu";
import StoreLocator from "../StoreLocator";
import StoreDescription from "../StoreDescription";
import styles from "./styles";
import TopBar from "../../components/TopBar";
const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <View>
      <TopBar />
    </View>
  );
};

export default DrawerMenu;
