import React from "react";
import { View, StyleSheet, Text } from "react-native";
import axiosInstance from "../apis/api_instance";
import useAxios from "../hooks/useAxios";
import { colors, fontSizes, fonts } from "../variables";
import { Pressable } from "react-native";
import ImageResponsive from "./ImageResponsive";

const MenuGrid = ({ selectedCategory, type }) => {
  const { responses, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    urls: ["menu", "category", "subcategory"],
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
        // Category level
        categories.map((category) => {
          const subcategories = responses[2].filter(
            (subcategory) => subcategory.categoryID === category.id
          );
          const hasSubcategories = subcategories.length > 0;
          return (
            <View style={styles.categoryList} key={category.id}>
              <Text style={styles.categoryHeader}>{category.name}</Text>
              {
                // Subcategory level
                hasSubcategories &&
                  subcategories.map((subcategory) => (
                    <View
                      style={[
                        styles.subcategoryList,
                        /* limited edition products */ subcategory.id === 3
                          ? styles.limitedEdition
                          : {},
                      ]}
                      key={subcategory.id}
                    >
                      <Text
                        style={[
                          styles.subcategoryHeader,
                          subcategory.id === 3
                            ? styles.limitedEditionSubcategoryHeader
                            : {},
                        ]}
                      >
                        {subcategory.name}
                      </Text>
                      <View style={styles.productList}>
                        {
                          // Product level
                          menuItems
                            .filter(
                              (menuItem) =>
                                menuItem.subcategoryID === subcategory.id
                            )
                            .map((menuItem) => (
                              <Pressable key={menuItem.id}>
                                <View
                                  style={[
                                    styles.productItem,
                                    /* limited edition product */ menuItem.subcategoryID ===
                                    3
                                      ? styles.limitedEditionProduct
                                      : {},
                                  ]}
                                >
                                  <ImageResponsive
                                    source={{
                                      sourceWidth: 111,
                                      uri: `https://storage.googleapis.com/booba_paradise/menu_images/${menuItem.id}.png`,
                                    }}
                                    aspectRatio={37 / 40}
                                  />
                                  <Text style={styles.productName}>
                                    {menuItem.name}
                                  </Text>
                                </View>
                              </Pressable>
                            ))
                        }
                      </View>
                    </View>
                  ))
              }
              <View style={styles.productList}>
                {menuItems &&
                  // Product level
                  menuItems
                    .filter((menuItem) =>
                      selectedCategory === 0
                        ? menuItem.categoryID === category.id &&
                          menuItem.subcategoryID === null
                        : menuItem.categoryID === selectedCategory &&
                          menuItem.subcategoryID === null
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
                          <Text style={styles.productName}>
                            {menuItem.name}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
              </View>
            </View>
          );
        })}
    </View>
  );
};

const { background, primary, accent, text } = colors.menu;
const { h1Text } = fonts;
const { large600, large450, large500, small300 } = fontSizes;
const styles = StyleSheet.create({
  menuGrid: {
    marginHorizontal: "12%",
  },
  categoryHeader: {
    fontFamily: h1Text,
    fontSize: large500,
    color: primary,
  },
  limitedEdition: {
    backgroundColor: accent,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  limitedEditionSubcategoryHeader: {
    fontFamily: h1Text,
    fontSize: large600,
    color: background,
    marginHorizontal: 12,
    textAlign: "center",
  },
  subcategoryHeader: {
    fontFamily: h1Text,
    fontSize: large450,
    color: text,
    marginHorizontal: 12,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: 304,
    alignSelf: "center",
  },
  productItem: {
    width: 144,
    minHeight: 244,
    justifyContent: "center",
    alignItems: "center",
  },
  limitedEditionProduct: {
    backgroundColor: background,
    borderRadius: 16,
    marginHorizontal: 12,
    marginVertical: 5,
  },
  productName: {
    fontFamily: h1Text,
    color: primary,
    textAlign: "center",
    marginBottom: 5,
    paddingHorizontal: 8,
  },
});

export default MenuGrid;
