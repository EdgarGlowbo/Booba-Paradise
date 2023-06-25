import "react-native-gesture-handler";
import Landing from "./src/pages/Landing/index";
import StoreLocator from "./src/pages/StoreLocator";
import StoreDescription from "./src/pages/StoreDescription";
import React from "react";
import Navigator from "./src/navigation/Navigator";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./src/pages/Menu";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
