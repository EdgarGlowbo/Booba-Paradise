import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "./style.scss";
import TopBar from "../../components/TopBar/TopBar";

const Landing = () => {
  const handleGetStarted = () => {
    // Handle Get Started button press
  };

  return (
    <View style={style.container}>
      <TopBar />
    </View>
  );
};

export default Landing;
