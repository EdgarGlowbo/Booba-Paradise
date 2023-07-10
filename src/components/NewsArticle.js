import React, { useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { colors, fonts } from "../variables";

const NewsArticle = ({ color, article }) => {
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
    <View style={[styles.container, { backgroundColor: color }]}>
      <Image
        source={require(`../../assets/news/news${article.id}.jpg`)}
        style={styles.headerImg}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>{article.content}</Text>
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
    fontFamily: fonts.headings,
    fontSize: 32,
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