import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState, useCallback } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faIceCream } from "@fortawesome/free-solid-svg-icons/faIceCream";
import CategoryDropdown from "./CategoryDropdown";
import { colors, fonts } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

const ControlPanel = ({ type, setType, value, setValue }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.typeContainer}>
        <Pressable
          onPress={() => setType("drinks")}
          style={[styles.typeBtn, type === "drinks" && styles.activeBorder]}
        >
          <FontAwesomeIcon
            icon={faMugHot}
            style={[styles.icon, type === "drinks" && styles.active]}
          />
          <Text style={[styles.typeLabel, type === "drinks" && styles.active]}>
            Bebidas
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setType("food")}
          style={[styles.typeBtn, type === "food" && styles.activeBorder]}
        >
          <FontAwesomeIcon
            icon={faIceCream}
            style={[styles.icon, type === "food" && styles.active]}
          />
          <Text style={[styles.typeLabel, type === "food" && styles.active]}>
            Comida
          </Text>
        </Pressable>
      </View>

      <Text style={styles.categoryTitle}>Categoría</Text>
      <CategoryDropdown type={type} value={value} setValue={setValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 64,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 32,
  },
  typeBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 4,
    marginHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.background,
    borderStyle: "solid",
  },
  icon: {
    color: colors.primaryShade1,
    width: 32,
    height: 32,
  },
  active: {
    color: colors.primary,
  },
  activeBorder: {
    borderBottomColor: colors.primary,
  },
  typeLabel: {
    color: colors.primaryShade1,
    fontFamily: fonts.body,
    fontSize: 16,
    paddingTop: 12,
  },
  categoryTitle: {
    fontFamily: fonts.categoryTitle,
    fontSize: 16,
    color: colors.primary,
    alignSelf: "flex-start",
  },
});

export default ControlPanel;
