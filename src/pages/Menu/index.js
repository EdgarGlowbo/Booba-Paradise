import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import ControlPanel from "../../components/ControlPanel";
import MenuGrid from "../../components/MenuGrid";
import Footer from "../../components/Footer";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [type, setType] = useState("drinks");

  const [fontsLoaded] = useFonts({
    Damion_400Regular,
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
      <View style={styles.header}>
        <ImageBackground
          source={require("../../../assets/wavyBackground.jpg")}
          style={styles.backgroundImg}
        >
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Menú</Text>
            <Text style={styles.headerDesc}>
              Un boba frappé, un refresher, waffles, lo que sea que se te
              antoje, hay suficiente para escoger.
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.menuContainer}>
        <ControlPanel
          type={type}
          setType={setType}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <MenuGrid selectedCategory={selectedCategory} type={type} />
      </View>
      <Footer containerBackground={styles.footer} />
    </View>
  );
};

export default Menu;
