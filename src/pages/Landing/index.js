import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import TopBar from "../../components/TopBar";

const Landing = () => {
  const handleGetStarted = () => {
    // Handle Get Started button press
  };

  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
};

export default Landing;
