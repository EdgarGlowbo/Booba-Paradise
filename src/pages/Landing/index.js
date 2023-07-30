import React, { useCallback, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import db from "../../data/firestore";
import { addDoc, collection } from "firebase/firestore";
// import styles from "./styles";
import PrimaryButton from "../../components/PrimaryButton";
import { useFonts } from "expo-font";
import { imagePaths } from "../../variables";
import { Damion_400Regular } from "@expo-google-fonts/damion";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import NewsTransition from "../../../assets/NewsTransition";
import * as SplashScreen from "expo-splash-screen";
import NewsArticle from "../../components/NewsArticle";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/api_instance";
import Footer from "../../components/Footer";
import useStyles from "./useStyles";
import useDump from "../../hooks/useDump";
import { deleteAllButOneByTitle } from "../../data/sandbox";

SplashScreen.preventAutoHideAsync();

const Landing = () => {
  const { responses } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    urls: ["/"],
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  const [newsFeedHeight, setNewsFeedHeight] = useState(0);
  const [newsFeedWidth, setNewsFeedWidth] = useState(0);

  const [fontsLoaded] = useFonts({
    Damion_400Regular,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  const styles = useStyles(newsFeedHeight);

  const onLayout = (event) => {
    const { height, width } = event.nativeEvent.layout;
    setNewsFeedHeight(height + Math.abs(styles.transition.marginTop));
    setNewsFeedWidth(width);
  };
  if (!fontsLoaded) {
    return null;
  }
  const news = responses.length > 0 ? responses[0] : [];
  // deleteAllButOneByTitle();
  // useDump(news);
  const { mobileLandingWavyBackground, desktopLandingWavyBackground } =
    imagePaths;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={mobileLandingWavyBackground}
        style={styles.headerContent}
      >
        <View style={styles.presentationContainer}>
          <Text style={styles.presentationHeading}>
            Especialistas en Bubble Tea
          </Text>
          <Text style={styles.presentationBody}>
            Nos encanta alegrar tu día con nuestros Boba's y deliciosos snacks.
          </Text>
          <PrimaryButton
            title="Nuestro Menú"
            screenName="Menu"
            backgroundColor={styles.primaryBtnBackground}
            textColor={styles.primaryBtnTextColor}
          />
        </View>
      </ImageBackground>
      {/* Set height of the newsContainer to the SVG background. Add the negative margin (used to overlap the header) */}
      <NewsTransition
        style={styles.transition}
        height={newsFeedHeight}
        width={newsFeedWidth}
      />
      <View style={styles.newsContainer} onLayout={onLayout}>
        <Text style={styles.newsFeedHeader}>Lo nuevo este verano</Text>
        {responses.length > 0 && (
          <View style={styles.newsFeed}>
            <NewsArticle
              backgroundColor={styles.newsPanelBackground1}
              textColor={styles.newsPanelText1}
              headerColor={styles.newsPanelHeader1}
              article={news[0]}
            />
            <NewsArticle
              backgroundColor={styles.newsPanelBackground2}
              textColor={styles.newsPanelText2}
              headerColor={styles.newsPanelHeader2}
              article={news[1]}
            />
            <NewsArticle
              backgroundColor={styles.newsPanelBackground3}
              textColor={styles.newsPanelText3}
              headerColor={styles.newsPanelHeader3}
              article={news[2]}
            />
          </View>
        )}
      </View>
      <Footer containerBackground={styles.footer} />
    </View>
  );
};

export default Landing;
