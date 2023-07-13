import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors, fonts } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

const CategoryDropdown = ({ type, selectedCategory, setSelectedCategory }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [categories, setCategories] = useState([
    { label: "Todas las bebidas", value: "allDrinks" },
    { label: "Sabores clásicos", value: "classic" },
    { label: "Sabores especiales", value: "special" },
    { label: "Sabores de agua", value: "water" },
  ]);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  useEffect(() => {
    if (type === "drinks") {
      setCategories([
        { label: "Todas las bebidas", value: "allDrinks" },
        { label: "Sabores clásicos", value: "classic" },
        { label: "Sabores especiales", value: "special" },
        { label: "Sabores de agua", value: "water" },
      ]);
      // setSelectedCategory("allDrinks");
    } else if (type === "food") {
      setCategories([
        { label: "Toda la comida", value: "allFood" },
        { label: "Waffles", value: "waffles" },
        { label: "Extras", value: "extras" },
        { label: "Nieves naturales", value: "iceCream" },
      ]);
      // setSelectedCategory("allFood");
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
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        // searchPlaceholder="Search..."
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.background,
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
    backgroundColor: colors.background,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontFamily: fonts.body,
    fontSize: 18,
  },
  placeholderStyle: {
    fontFamily: fonts.body,
    fontSize: 18,
  },
  selectedTextStyle: {
    fontFamily: fonts.body,
    fontSize: 18,
  },
  focusStyle: {
    borderColor: colors.primary,
  },
});
