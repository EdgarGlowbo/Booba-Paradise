import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Pressable } from "react-native";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useNavigation } from "@react-navigation/native";

const BurgerMenu = () => {
  const navigation = useNavigation();
  // const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
        <FontAwesomeIcon icon={faBars} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});

export default BurgerMenu;
