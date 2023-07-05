import React, { useCallback } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";
import PrimaryButton from "../../components/PrimaryButton";
import { useFonts } from "expo-font";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import NewsTransition from "../../../assets/NewsTransition";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "../../variables";
import NewsArticle from "../../components/NewsArticle";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/newsFeed";
import Footer from "../../components/Footer";

SplashScreen.preventAutoHideAsync();

const Landing = () => {
  const { response, error, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    url: "/",
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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/LandingBackground.jpg")}
        style={styles.headerContent}
      >
        <View style={styles.presentationContainer}>
          <View style={styles.presentationContainer}>
            <Text style={styles.presentationHeading}>
              Especialistas en Bubble Tea
            </Text>
            <Text style={styles.presentationBody}>
              Nos encanta alegrar tu día con nuestros Booba's y deliciosos
              Snacks.
            </Text>
            <PrimaryButton title="Nuestro Menú" screenName="Menu" />
          </View>
          <Image
            source={require("../../../assets/CuteBooba.png")}
            style={styles.image}
          />
        </View>
      </ImageBackground>
      <NewsTransition style={styles.transition} />
      <View style={styles.newsContainer}>
        <Text style={styles.newsFeedHeader}>Lo nuevo este verano</Text>
        {response && (
          <View style={styles.newsFeed}>
            <NewsArticle
              color={colors.articleBackground1}
              article={response.data[0]}
            />
            <NewsArticle
              color={colors.articleBackground2}
              article={response.data[1]}
            />
            <NewsArticle
              color={colors.articleBackground3}
              article={response.data[2]}
            />
          </View>
        )}
      </View>
      <Footer />
    </View>
  );
};

export default Landing;
