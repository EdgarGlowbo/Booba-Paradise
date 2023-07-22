import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import axiosInstance from "../apis/api_instance";
import useAxios from "../hooks/useAxios";
import { colors, fonts } from "../variables";
import { Pressable } from "react-native";
import ImageResponsive from "./ImageResponsive";

const MenuGrid = ({ selectedCategory, type }) => {
  const { responses, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    urls: ["menu", "category"],
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  const filterMenuItems = (data) => {
    if (type === "drinks") {
      return data.filter((item) => item.type === "drink");
    } else if (type === "food") {
      return data.filter((item) => item.type === "food");
    }
    return [];
  };
  const filterCategories = (categories) => {
    if (type === "drinks") {
      const drinkCats = categories.filter(
        (category) => category.type === "drink"
      );
      if (selectedCategory !== 0) {
        return drinkCats.filter((category) => category.id === selectedCategory);
      }
      return drinkCats;
    } else if (type === "food") {
      const foodCats = categories.filter(
        (category) => category.type === "food"
      );
      if (selectedCategory !== 0) {
        return foodCats.filter((category) => category.id === selectedCategory);
      }
      return foodCats;
    }
    return [];
  };

  const menuItems = responses.length > 0 ? filterMenuItems(responses[0]) : [];
  const categories = responses.length > 0 ? filterCategories(responses[1]) : [];

  return (
    <View style={styles.menuGrid}>
      {!isLoading &&
        categories.map((category) => (
          <View style={styles.categoryList} key={category.id}>
            <Text style={styles.categoryHeader}>{category.name}</Text>
            <View style={styles.productList}>
              {menuItems &&
                menuItems
                  .filter((menuItem) =>
                    selectedCategory === 0
                      ? menuItem.categoryID === category.id
                      : menuItem.categoryID === selectedCategory
                  )
                  .map((menuItem) => (
                    <Pressable key={menuItem.id}>
                      <View style={styles.productItem}>
                        <ImageResponsive
                          source={{
                            sourceWidth: 111,
                            uri: `https://storage.googleapis.com/booba_paradise/menu_images/${menuItem.id}.png`,
                          }}
                          aspectRatio={37 / 40}
                        />
                        <Text style={styles.productName}>{menuItem.name}</Text>
                      </View>
                    </Pressable>
                  ))}
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuGrid: {
    marginHorizontal: "12%",
  },
  categoryHeader: {
    fontFamily: fonts.categoryTitle,
    fontSize: 22,
    color: colors.primary,
  },
  // categoryList: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: 304,
    alignSelf: "center",
  },
  productItem: {
    // flex: 1,
    width: 144,
    minHeight: 244,
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontFamily: fonts.categoryTitle,
    color: colors.primary,
    textAlign: "center",
    marginBottom: 5,
    paddingHorizontal: 8,
  },
});

export default MenuGrid;
