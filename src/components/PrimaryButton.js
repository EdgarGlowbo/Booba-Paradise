import React, { useCallback } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { colors, fonts } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import * as SplashScreen from "expo-splash-screen";

// Fonts
import { useNavigation } from "@react-navigation/native";
SplashScreen.preventAutoHideAsync();

const PrimaryButton = ({ title, screenName, backgroundColor, textColor }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
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

  const handlePress = () => {
    navigation.navigate(screenName);
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.btn, backgroundColor]}>
        <Text style={[styles.txt, textColor]}>{title}</Text>
        <FontAwesomeIcon icon={faCaretRight} style={[styles.icon, textColor]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 14,
    width: "content",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  icon: {
    height: 24,
    width: 24,
  },
  txt: {
    fontFamily: fonts.primaryBtn,
    fontSize: 16,
  },
});

export default PrimaryButton;
