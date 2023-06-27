import React from "react";
import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { colors } from "../../variables";
const BurgerMenu = () => {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";

  const handlePress = () => {
    if (isDrawerOpen) {
      navigation.dispatch(DrawerActions.closeDrawer());
    } else {
      navigation.dispatch(DrawerActions.openDrawer());
    }
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
        <FontAwesomeIcon
          icon={isDrawerOpen ? faX : faBars}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    color: colors.background,
  },
});

export default BurgerMenu;
