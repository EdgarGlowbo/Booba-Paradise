import "react-native-gesture-handler";
import Landing from "./src/pages/Landing/index";
import TopBar from "./src/components/TopBar";
import StoreLocator from "./src/pages/StoreLocator";
import StoreDescription from "./src/pages/StoreDescription";
import DrawerNavigation from "./src/pages/DrawerMenu";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Menu from "./src/pages/Menu";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      <Text>Still unsafe?</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Drawer Menu" component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
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
