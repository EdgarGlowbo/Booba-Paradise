import React, { useCallback } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { colors, fonts } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_800ExtraBold } from "@expo-google-fonts/poppins";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import * as SplashScreen from "expo-splash-screen";

// Fonts
import { useNavigation } from "@react-navigation/native";
SplashScreen.preventAutoHideAsync();

const PrimaryButton = ({ title, screenName }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
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
      <View style={styles.btn}>
        <Text style={styles.txt}>{title}</Text>
        <FontAwesomeIcon icon={faCaretRight} style={styles.icon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: colors.accent,
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
    color: colors.background,
  },
  txt: {
    color: colors.background,
    fontFamily: fonts.primaryBtn,
    fontSize: 16,
  },
});

export default PrimaryButton;
