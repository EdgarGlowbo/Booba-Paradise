import React from "react";
import { View, StyleSheet, Text } from "react-native";
import axiosInstance from "../apis/api_instance";
import useAxios from "../hooks/useAxios";
import { colors, fonts } from "../variables";
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
                    <View style={styles.subcategoryList} key={subcategory.id}>
                      <Text style={styles.subcategoryHeader}>
                        {subcategory.name}
                      </Text>
                      <View style={styles.productList}>
                        {
                          // Product level
                          menuItems
                            .filter(
                              (menuItem) =>
                                // Category filtering
                                // selectedCategory === 0
                                //   ? menuItem.categoryID === category.id
                                //   : menuItem.categoryID === selectedCategory

                                // Subcategory filtering
                                menuItem.subcategoryID === subcategory.id
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
