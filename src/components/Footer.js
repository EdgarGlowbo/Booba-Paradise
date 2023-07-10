import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { colors, fonts } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

const Footer = ({ backgroundColor }) => {
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
  const url = {
    fb: "https://www.facebook.com/profile.php?id=100084723126301",
    ig: "https://www.instagram.com/booba.paradise/",
    wa1: "https://wa.link/1iz8ti",
    wa2: "https://wa.link/hjm53f",
  };
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.footerTitle}>¡Síguenos!</Text>
      <View style={styles.socialsContainer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url.fb);
          }}
        >
          <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url.ig);
          }}
        >
          <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerTitle}>Contáctanos</Text>
      <View style={styles.contactContainer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url.wa1);
          }}
          style={styles.waContainer}
        >
          <FontAwesomeIcon icon={faWhatsapp} style={styles.icon} />
          <Text style={styles.hyperlink}>+52 627 104 5160</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url.wa2);
          }}
          style={styles.waContainer}
        >
          <FontAwesomeIcon icon={faWhatsapp} style={styles.icon} />
          <Text style={styles.hyperlink}>+52 627 107 1638</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
    rowGap: 12,
  },
  footerTitle: {
    fontFamily: fonts.footerTitle,
    color: colors.background,
    // alignSelf: "flex-start",
    fontSize: 18,
  },
  socialsContainer: {
    flexDirection: "row",
    margin: 16,
    columnGap: 12,
  },
  contactContainer: {
    margin: 16,
    rowGap: 12,
  },
  icon: {
    color: colors.background,
    width: 32,
    height: 32,
  },
  waContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 12,
  },
  hyperlink: {
    color: colors.hyperlink,
    fontFamily: fonts.body,
    fontSize: 14,
  },
});
export default Footer;
