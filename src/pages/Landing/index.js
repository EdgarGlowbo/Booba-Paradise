import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Nuestro menú"
        onPress={() => {
          navigation.navigate("Menu");
        }}
      />
    </View>
  );
};

export default Landing;
