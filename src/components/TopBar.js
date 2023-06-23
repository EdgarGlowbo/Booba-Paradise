import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors, fonts } from "../variables";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
// Fonts
import { useFonts } from "expo-font";
import { Allison_400Regular } from "@expo-google-fonts/allison";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const TopBar = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [fontsLoaded] = useFonts({
    Allison_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={handlePress}>
        <FontAwesomeIcon icon={isPressed ? faX : faBars} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.boobaText}>
        Booba
        <Text style={styles.paradiseText}>Paradise</Text>
      </Text>
      <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  boobaText: {
    fontFamily: fonts.boobaText,
    fontSize: 32,
    color: colors.boobaText,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paradiseText: {
    color: colors.paradiseText,
    margin: -15,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    padding: 12,
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default TopBar;
