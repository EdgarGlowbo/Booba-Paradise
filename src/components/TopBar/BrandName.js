import React from "react";
import { View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageResponsive from "../ImageResponsive";

const BrandName = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Landing");
  };

  return (
    <Pressable onPress={handlePress}>
      <View>
        <ImageResponsive
          source={{
            sourceWidth: 152,
            uri: require("../../../assets/brandName.png"),
          }}
          aspectRatio={76 / 29}
        />
      </View>
    </Pressable>
  );
};

export default BrandName;
