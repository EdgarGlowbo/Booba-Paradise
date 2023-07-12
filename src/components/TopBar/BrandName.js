import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BrandName = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Landing");
  };

  return (
    <Pressable onPress={handlePress}>
      <View>
        <Image
          source={require("../../../assets/brandName.png")}
          style={styles.boobaTypo}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  boobaTypo: {
    width: 131,
    height: 50,
  },
});

export default BrandName;
