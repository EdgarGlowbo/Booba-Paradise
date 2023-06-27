import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
// Images
import { LandingBackground } from "../../../assets/LandingBackground.jpg";
import { CuteBooba } from "../../../assets/CuteBooba.png";
import PrimaryButton from "../../components/PrimaryButton";

const Landing = () => {
  return (
    <View>
      <Image source={LandingBackground} style={styles.backgroundImg} />
      <View>
        <View>
          <Text>Especialistas en Bubble Tea</Text>
          <Text>
            Nos encanta alegrar tu día con nuestros Booba's y deliciosos Snacks.
          </Text>
          <PrimaryButton title="Nuestro Menú" screenName="Menu" />
        </View>
        <Image source={CuteBooba} style={styles.image} />
      </View>
    </View>
  );
};

export default Landing;
