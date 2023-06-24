import "react-native-gesture-handler";
import Landing from "./src/pages/Landing/index";
import TopBar from "./src/components/TopBar";
import StoreLocator from "./src/pages/StoreLocator";
import StoreDescription from "./src/pages/StoreDescription";
import DrawerNavigation from "./src/pages/DrawerMenu";
import React from "react";
import Navigator from "./src/navigation/Navigator";
import { StyleSheet, Text, View } from "react-native";

import Menu from "./src/pages/Menu";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
