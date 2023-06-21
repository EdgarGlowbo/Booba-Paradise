import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const DrawerNavigation = () => {
  const handleDrawerItemClick = (item) => {
    // Handle navigation based on item selection
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleDrawerItemClick("Home")}
      >
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleDrawerItemClick("Profile")}
      >
        <Text style={styles.drawerItemText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleDrawerItemClick("Settings")}
      >
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>

      {/* Add more drawer items as needed */}
    </View>
  );
};

export default DrawerNavigation;
