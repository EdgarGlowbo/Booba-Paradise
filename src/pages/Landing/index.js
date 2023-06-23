import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import TopBar from "../../components/TopBar";

const Landing = ({ navigation }) => {
  return (
    <View>
      <TopBar navigation={navigation} />
    </View>
  );
};

export default Landing;
