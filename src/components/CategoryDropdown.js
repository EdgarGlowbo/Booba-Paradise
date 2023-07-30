import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors, dimensions, fonts, fontSizes, spacing } from "../variables";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import useFetch from "../hooks/useFetch";

const CategoryDropdown = ({ type, selectedCategory, setSelectedCategory }) => {
  const [isFocus, setIsFocus] = useState(false);

  const { responses, isLoading } = useFetch([
    {
      url: "category",
      orderParam: ["index"],
    },
  ]);
  useFonts({
    Poppins_400Regular,
  });

  const getData = (snapshots) => {
    const categories = [];

    // Adds ghost default category "All"
    if (type === "drink") {
      categories.push({ label: "Todas las bebidas", value: 0, type: "drink" });
    } else if (type === "food") {
      categories.push({ label: "Toda la comida", value: 0, type: "food" });
    }
    snapshots.forEach((doc) => {
      const data = doc.data();

      const catObj = { label: data.name, value: doc.id, type: data.type };
      if (catObj.type === type) {
        categories.push(catObj);
      }
    });
    return categories;
  };
  const categories = responses.length > 0 ? getData(responses[0]) : [];

  return (
    <View style={styles.container}>
      {!isLoading && (
        <Dropdown
          style={[styles.dropdown, isFocus && styles.focusStyle]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.selectedTextStyle}
          iconStyle={styles.icon}
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
      )}
    </View>
  );
};

export default CategoryDropdown;

const { background, primary, text } = colors.menu;
const { bodyText } = fonts;
const { regular400 } = fontSizes;
const { space50, space100, space150, space200, space300 } = spacing;
const { size200, size600 } = dimensions;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: background,
    padding: space200,
  },
  dropdown: {
    height: size600,
    width: "100%",
    borderColor: "#6d6d6d",
    borderWidth: 2,
    borderRadius: 48,
    paddingHorizontal: space150,
  },
  icon: {
    marginRight: space50,
    height: size200,
    width: size200,
  },
  label: {
    position: "absolute",
    backgroundColor: background,
    left: space300,
    top: space100,
    zIndex: 999,
    paddingHorizontal: space100,
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
