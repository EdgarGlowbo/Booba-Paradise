import React from "react";
import { View, StyleSheet, Text } from "react-native";

import {
  colors,
  dimensions,
  fontSizes,
  fonts,
  radius,
  spacing,
} from "../variables";
import { Pressable } from "react-native";
import ImageResponsive from "./ImageResponsive";

const MenuGrid = ({ selectedCategory, type, responses, isLoading }) => {
  const filterMenuItems = (snapshot) => {
    const data = snapshot.map((doc) => {
      return doc.data();
    });
    return data.filter((item) => item.type === type);
  };
  const filterCategories = (snapshot) => {
    const categories = snapshot.map((doc) => doc.data());
    if (selectedCategory !== 0) {
      return categories.filter((category) => category.id === selectedCategory);
    }
    return categories.filter((category) => category.type === type);
  };

  const menuItems = responses.length > 0 ? filterMenuItems(responses[0]) : [];
  const categories = responses.length > 0 ? filterCategories(responses[1]) : [];

  return (
    <View style={styles.menuGrid}>
      {!isLoading &&
        // Category level
        categories.map((category) => {
          const subcategories = responses[2]
            .map((doc) => doc.data())
            .filter((subcategory) => subcategory.categoryID === category.id);
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
                        /* limited edition products */ subcategory.id ===
                        "9FOMOZ1HyzxCHWxWlXdf"
                          ? styles.limitedEdition
                          : {},
                      ]}
                      key={subcategory.id}
                    >
                      <Text
                        style={[
                          styles.subcategoryHeader,
                          subcategory.id === "9FOMOZ1HyzxCHWxWlXdf"
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
                                    "9FOMOZ1HyzxCHWxWlXdf"
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
const { large600, large450, large500 } = fontSizes;
const { space50, space100, space150, space200, space300 } = spacing;
const { size1800, size3050 } = dimensions;
const { radius400 } = radius;
const styles = StyleSheet.create({
  menuGrid: {
    maxWidth: 1280,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryList: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  subcategoryList: {
    justifyContent: "center",
    alignItems: "center",
  },
  categoryHeader: {
    alignSelf: "flex-start",
    fontFamily: h1Text,
    fontSize: large500,
    color: primary,
  },
  limitedEdition: {
    backgroundColor: accent,
    alignItems: "center",
    paddingHorizontal: space100,
    paddingVertical: space300,
    borderRadius: radius400,
  },
  limitedEditionSubcategoryHeader: {
    fontFamily: h1Text,
    fontSize: large600,
    color: background,
    marginHorizontal: space150,
    textAlign: "center",
  },
  subcategoryHeader: {
    fontFamily: h1Text,
    fontSize: large450,
    color: text,
    marginHorizontal: space150,
    alignSelf: "flex-start",
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  productItem: {
    width: size1800,
    minHeight: size3050,
    justifyContent: "center",
    alignItems: "center",
  },
  limitedEditionProduct: {
    backgroundColor: background,
    borderRadius: radius400,
    marginHorizontal: space100,
    marginVertical: space50,
  },
  productName: {
    fontFamily: h1Text,
    color: primary,
    textAlign: "center",
    marginBottom: space50,
    paddingHorizontal: space100,
  },
});

export default MenuGrid;
