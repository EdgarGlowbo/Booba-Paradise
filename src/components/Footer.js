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

import { colors, dimensions, fontSizes, fonts, spacing } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

const Footer = ({ containerBackground }) => {
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
  const url = {
    fb: "https://www.facebook.com/profile.php?id=100084723126301",
    ig: "https://www.instagram.com/booba.paradise/",
    wa1: "https://wa.link/1iz8ti",
    wa2: "https://wa.link/hjm53f",
  };
  return (
    <View style={[styles.container, containerBackground]}>
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

const { text, hyperlink } = colors.footer;
const { h1Text, bodyText } = fonts;
const { regular400, small300 } = fontSizes;
const { space150, space200, space400 } = spacing;
const { size400 } = dimensions;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: space400,
    paddingHorizontal: space200,
    rowGap: space150,
  },
  footerTitle: {
    fontFamily: h1Text,
    color: text,
    fontSize: regular400,
  },
  socialsContainer: {
    flexDirection: "row",
    margin: space200,
    columnGap: space150,
  },
  contactContainer: {
    margin: space200,
    rowGap: space150,
  },
  icon: {
    color: text,
    width: size400,
    height: size400,
  },
  waContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: space150,
  },
  hyperlink: {
    color: hyperlink,
    fontFamily: bodyText,
    fontSize: small300,
  },
});
export default Footer;
