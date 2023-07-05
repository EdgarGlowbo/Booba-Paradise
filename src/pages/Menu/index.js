import React, { useCallback } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

const Menu = () => {
  const [fontsLoaded] = useFonts({
    Damion_400Regular,
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
      <View style={styles.header}>
        <ImageBackground
          source={require("../../../assets/wavyBackground.jpg")}
          style={styles.backgroundImg}
        >
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Menú</Text>
            <Text style={styles.headerDesc}>
              Un booba frappé, un refresher, waffles, lo que sea que se te
              antoje, hay suficiente para escoger.
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Menu;
