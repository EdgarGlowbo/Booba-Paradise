import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import axiosInstance from "../apis/api_instance";
import useAxios from "../hooks/useAxios";
import { colors, fonts } from "../variables";
import { Pressable } from "react-native";
import ImageResponsive from "./ImageResponsive";

const MenuGrid = ({ selectedCategory, type }) => {
  const { response, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    url: "menu",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  const categories = {
    drinks: {
      classic: "Sabores clásicos",
      special: "Sabores especiales",
      water: "Sabores de agua",
    },
    food: {
      waffles: "Waffles",
      extras: "Extras",
      iceCream: "Nieves naturales",
    },
  };
  const filterMenuItems = (data) => {
    if (type === "drinks") {
      return data.filter((item) => item.type === "drink");
    } else if (type === "food") {
      return data.filter((item) => item.type === "food");
    }
    return [];
  };

  const menuItems = response ? filterMenuItems(response) : [];

  if (selectedCategory === "allDrinks" || selectedCategory === "allFood") {
    return (
      <View style={styles.menuGrid}>
        {!isLoading &&
          Object.entries(categories[type]).map(
            ([categoryKey, categoryValue]) => (
              <View style={styles.categoryList} key={categoryKey}>
                <Text style={styles.categoryHeader}>{categoryValue}</Text>
                <View style={styles.productList}>
                  {menuItems &&
                    menuItems.map((menuItem) => (
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
            )
          )}
      </View>
    );
  }

  return (
    <View style={styles.menuGrid}>
      {selectedCategory && (
        <View style={styles.categoryList}>
          <Text style={styles.categoryHeader}>
            {categories[type][selectedCategory]}
          </Text>
          <View style={styles.productList}>
            {menuItems &&
              menuItems
                .filter((menuItem) => menuItem.category === selectedCategory)
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
      )}
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
