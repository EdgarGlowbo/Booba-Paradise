import React, { useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { colors, fonts } from "../variables";

const NewsArticle = ({
  color,
  article: { id, title, content, background_color },
}) => {
  const [fontsLoaded] = useFonts({
    Damion_400Regular,
    Poppins_500Medium,
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
    <View
      style={[
        styles.container,
        background_color
          ? { backgroundColor: background_color }
          : { backgroundColor: color },
      ]}
    >
      <Image
        source={`https://storage.googleapis.com/booba_paradise/news_feed/${id}.jpg`}
        style={styles.headerImg}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

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
    fontFamily: fonts.newsHeader,
    fontSize: 24,
    color: colors.primary,
    textAlign: "center",
  },
  content: {
    marginVertical: 8,
    marginHorizontal: 32,
    fontFamily: fonts.body,
    fontSize: 18,
    color: colors.text,
    textAlign: "center",
  },
  headerImg: {
    width: 320,
    height: 242,
  },
});

export default NewsArticle;
