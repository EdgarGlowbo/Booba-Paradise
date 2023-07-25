import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useCallback } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faIceCream } from "@fortawesome/free-solid-svg-icons/faIceCream";
import CategoryDropdown from "./CategoryDropdown";
import { colors, fonts, fontSizes } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

const ControlPanel = ({
  type,
  setType,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  useCallback(async () => {
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
          onPress={() => {
            setType("drinks");
            setSelectedCategory(0);
          }}
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
          onPress={() => {
            setType("food");
            setSelectedCategory(0);
          }}
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
      <CategoryDropdown
        type={type}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </View>
  );
};

const { background, primary, secondary, accent } = colors.menu;
const { bodyText, h1Text } = fonts;
const { small300 } = fontSizes;

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
    borderBottomColor: background,
    borderStyle: "solid",
  },
  icon: {
    color: primary,
    width: 32,
    height: 32,
  },
  active: {
    color: accent,
  },
  activeBorder: {
    borderBottomColor: accent,
  },
  typeLabel: {
    color: secondary,
    fontFamily: bodyText,
    fontSize: small300,
    paddingTop: 12,
  },
  categoryTitle: {
    fontFamily: h1Text,
    fontSize: small300,
    color: primary,
    alignSelf: "flex-start",
  },
});

export default ControlPanel;
