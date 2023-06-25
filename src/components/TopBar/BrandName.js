import React, { useCallback } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { colors, fonts } from "../../variables";
import { useFonts } from "expo-font";
import { Allison_400Regular } from "@expo-google-fonts/allison";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const BrandName = () => {
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

  return (
    <Pressable>
      <View>
        <Text style={styles.boobaText}>
          Booba
          <Text style={styles.paradiseText}>Paradise</Text>
        </Text>
      </View>
    </Pressable>
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
});

export default BrandName;
