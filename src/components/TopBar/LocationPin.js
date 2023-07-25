import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { colors, dimensions } from "../../variables";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
// Fonts
import { useNavigation } from "@react-navigation/native";

const LocationPin = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("LocationStack", { screen: "StoreLocator" });
  };
  return (
    <Pressable onPress={handlePress}>
      <View>
        <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
      </View>
    </Pressable>
  );
};
const { text } = colors.topBar;
const { size300 } = dimensions;
const styles = StyleSheet.create({
  icon: {
    height: size300,
    width: size300,
    color: text,
  },
});

export default LocationPin;
