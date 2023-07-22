import React, { useCallback } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import PrimaryButton from "../../components/PrimaryButton";
import { useFonts } from "expo-font";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import NewsTransition from "../../../assets/NewsTransition";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "../../variables";
import NewsArticle from "../../components/NewsArticle";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/api_instance";
import Footer from "../../components/Footer";

SplashScreen.preventAutoHideAsync();

const Landing = () => {
  const { responses, errors, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    urls: ["/"],
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  const [fontsLoaded] = useFonts({
    Damion_400Regular,
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
  const news = responses.length > 0 ? responses[0] : [];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/LandingBackground.jpg")}
        style={styles.headerContent}
      >
        <View style={styles.presentationContainer}>
          <Text style={styles.presentationHeading}>
            Especialistas en Bubble Tea
          </Text>
          <Text style={styles.presentationBody}>
            Nos encanta alegrar tu día con nuestros Booba's y deliciosos snacks.
          </Text>
          <PrimaryButton title="Nuestro Menú" screenName="Menu" />
        </View>
      </ImageBackground>
      <NewsTransition style={styles.transition} />
      <View style={styles.newsContainer}>
        <Text style={styles.newsFeedHeader}>Lo nuevo este verano</Text>
        {responses.length > 0 && (
          <View style={styles.newsFeed}>
            <NewsArticle color={colors.articleBackground1} article={news[0]} />
            <NewsArticle color={colors.articleBackground2} article={news[1]} />
            <NewsArticle color={colors.articleBackground3} article={news[2]} />
          </View>
        )}
      </View>
      <Footer backgroundColor={colors.landingFooterBackground} />
    </View>
  );
};

export default Landing;
