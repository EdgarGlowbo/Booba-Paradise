import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../variables";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <FontAwesomeIcon icon={faBars} />
      <Text style={styles.boobaText}>
        Booba
        <Text style={styles.paradiseText}>Paradise</Text>
      </Text>
      <FontAwesomeIcon icon={faLocationDot} />
    </View>
  );
};

const styles = StyleSheet.create({
  boobaText: {
    fontFamily: fonts.boobaText,
    fontSize: 32,
    color: colors.boobaText,
  },
  paradiseText: {
    color: colors.paradiseText,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "space-between",
    width: 100,
    justifyContent: "top",
  },
});

export default TopBar;
