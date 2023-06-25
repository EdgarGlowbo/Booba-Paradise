import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
// Fonts

const LocationPin = () => {
  return (
    <Pressable>
      <View>
        <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});

export default LocationPin;
