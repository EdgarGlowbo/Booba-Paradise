import React, { useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { colors, fontSizes, fonts } from "../variables";

const NewsArticle = ({
  backgroundColor,
  textColor,
  headerColor,
  article: { id, title, content, background_color, header_color, text_color },
}) => {
  const [fontsLoaded] = useFonts({
    Damion_400Regular,
    Poppins_500Medium,
    Poppins_400Regular,
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
    <View
      style={[
        styles.container,
        background_color
          ? { backgroundColor: background_color }
          : backgroundColor,
      ]}
    >
      <Image
        source={`https://storage.googleapis.com/booba_paradise/news_feed/${id}.jpg`}
        style={styles.headerImg}
      />
      <View style={styles.contentContainer}>
        <Text
          style={[
            styles.title,
            header_color ? { color: header_color } : headerColor,
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.content,
            text_color ? { color: text_color } : textColor,
          ]}
        >
          {content}
        </Text>
      </View>
    </View>
  );
};

const { primary, text } = colors.landing;
const { h2Text, bodyText } = fonts;
const { regular400, large500 } = fontSizes;
const styles = StyleSheet.create({
  container: {
    flexBasis: 550.5,
    width: 320,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: "auto",
    marginHorizontal: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginHorizontal: 12,
    fontFamily: h2Text,
    fontSize: large500,
    color: primary,
    textAlign: "center",
  },
  content: {
    marginVertical: 8,
    marginHorizontal: 32,
    fontFamily: bodyText,
    fontSize: regular400,
    color: text,
    textAlign: "center",
  },
  headerImg: {
    width: 320,
    height: 242,
  },
});

export default NewsArticle;
