import React, { useCallback } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";
// Images
import PrimaryButton from "../../components/PrimaryButton";
// Fonts
import { useFonts } from "expo-font";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Landing = () => {
  const [fontsLoaded] = useFonts({
    Damion_400Regular,
    Poppins_400Regular,
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
      <ImageBackground
        source={require("../../../assets/LandingBackground.jpg")}
        style={styles.headerContent}
      >
        <View style={styles.presentationContainer}>
          <View style={styles.presentationContainer}>
            <Text style={styles.presentationHeading}>
              Especialistas en Bubble Tea
            </Text>
            <Text style={styles.presentationBody}>
              Nos encanta alegrar tu día con nuestros Booba's y deliciosos
              Snacks.
            </Text>
            <PrimaryButton title="Nuestro Menú" screenName="Menu" />
          </View>
          <Image
            source={require("../../../assets/CuteBooba.png")}
            style={styles.image}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Landing;
