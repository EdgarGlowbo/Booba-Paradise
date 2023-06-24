import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Nuestro Menú" component={Menu} />
        <Drawer.Screen name="Encuéntranos!" component={StoreLocator} />
        <Drawer.Screen
          name="Horario de Servicio"
          component={StoreDescription}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
