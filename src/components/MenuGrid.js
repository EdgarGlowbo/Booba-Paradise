import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import axiosInstance from "../apis/api_instance";
import useAxios from "../hooks/useAxios";
import { colors, fonts } from "../variables";
import { Pressable } from "react-native";

const MenuGrid = ({ selectedCategory, type }) => {
  const { response, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    url: `${type}`,
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

  if (selectedCategory === "allDrinks" || selectedCategory === "allFood") {
    return (
      <View style={styles.menuGrid}>
        {Object.values(categories[type]).map((category) => (
          <View style={styles.categoryList} key={category}>
            <Text style={styles.categoryHeader}>{category}</Text>
            <View style={styles.productList}>
              {response &&
                response.map((menuItem) => (
                  <Pressable
                    // style={styles.productItem}
                    key={menuItem.idMenuItem}
                  >
                    <View style={styles.productItem}>
                      <Image
                        source={require("../../assets/menu/boobaLogo.png")}
                        style={styles.productImage}
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
  }

  return (
    <View style={styles.menuGrid}>
      {selectedCategory && (
        <View style={styles.categoryList}>
          <Text style={styles.categoryHeader}>
            {categories[type][selectedCategory]}
          </Text>
          <View style={styles.productList}>
            {response &&
              response
                .filter((menuItem) => menuItem.category === selectedCategory)
                .map((menuItem) => (
                  <Pressable
                    // style={styles.productItem}
                    key={menuItem.idMenuItem}
                  >
                    <View style={styles.productItem}>
                      <Image
                        source={require("../../assets/menu/boobaLogo.png")}
                        style={styles.productImage}
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
  productImage: {
    height: 120,
    width: 120,
    marginVertical: 15,
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
