import React, { useCallback } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { colors, fonts } from "../../variables";
import { useFonts } from "expo-font";
import { Allison_400Regular } from "@expo-google-fonts/allison";

import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const BrandName = () => {
  const navigation = useNavigation();
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
    navigation.navigate("Landing");
  };

  return (
    <Pressable onPress={handlePress}>
      <View>
        {/* <Text style={styles.boobaText}>
          Booba
          <Text style={styles.paradiseText}>Paradise</Text>
        </Text> */}
        <Image
          source={require("../../../assets/brandName.png")}
          style={styles.boobaTypo}
        />
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
  // paradiseText: {
  //   color: colors.paradiseText,
  //   margin: -15,
  // },
  boobaTypo: {
    width: 131,
    height: 50,
  },
});

export default BrandName;
