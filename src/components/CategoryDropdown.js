import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors, fonts, fontSizes } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

const CategoryDropdown = ({ type, selectedCategory, setSelectedCategory }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [categories, setCategories] = useState([
    { label: "Todas las bebidas", value: 0 },
    { label: "Sabores clásicos", value: 1 },
    { label: "Sabores especiales", value: 2 },
    { label: "Sabores de agua", value: 3 },
  ]);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  useEffect(() => {
    if (type === "drinks") {
      setCategories([
        { label: "Todas las bebidas", value: 0 },
        { label: "Sabores clásicos", value: 1 },
        { label: "Sabores especiales", value: 2 },
        { label: "Sabores de agua", value: 3 },
      ]);
    } else if (type === "food") {
      setCategories([
        { label: "Toda la comida", value: 0 },
        { label: "Waffles", value: 4 },
        { label: "Extras", value: 5 },
        { label: "Nieves naturales", value: 6 },
      ]);
    }
  }, [type]);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && styles.focusStyle]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.selectedTextStyle}
        data={categories}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        value={selectedCategory}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setSelectedCategory(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default CategoryDropdown;

const { background, primary, text } = colors.menu;
const { bodyText } = fonts;
const { regular400 } = fontSizes;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: background,
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: "100%",
    borderColor: "#6d6d6d",
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: background,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontFamily: bodyText,
    fontSize: regular400,
  },
  placeholderStyle: {
    fontFamily: bodyText,
    fontSize: regular400,
  },
  selectedTextStyle: {
    fontFamily: bodyText,
    color: text,
    fontSize: regular400,
  },
  focusStyle: {
    borderColor: primary,
  },
});
