import React, { useCallback } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { colors, dimensions, fontSizes, fonts, spacing } from "../variables";
import { Pressable } from "react-native";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import useBusinessStatus from "../hooks/useBusinessStatus";

SplashScreen.preventAutoHideAsync();

const StoreDescBottomTab = ({ details: { name, address, opening_hours } }) => {
  const { isOpen, status, message } = useBusinessStatus(
    new Date(),
    opening_hours
  );
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const navigation = useNavigation();
  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.detailsContainer}
        onPress={() => {
          navigation.navigate("StoreDescription");
        }}
      >
        <View style={styles.detailsBody}>
          <Text style={styles.businessName}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={[styles.status, isOpen ? styles.open : styles.closed]}>
            {status}: <Text style={styles.statusMessage}>{message}</Text>
          </Text>
          <View style={styles.services}>
            <View style={styles.serviceItem}>
              <FontAwesomeIcon icon={faStore} style={styles.icon} />
              <Text style={styles.serviceLabel}>Para comer aquí</Text>
            </View>
            <View style={styles.serviceItem}>
              <FontAwesomeIcon icon={faBagShopping} style={styles.icon} />
              <Text style={styles.serviceLabel}>Para llevar</Text>
            </View>
          </View>
        </View>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={[styles.icon, styles.openDescIcon]}
        />
      </Pressable>
    </View>
  );
};

const { background, secondary, text, open, closed } = colors.storeLocator;
const { h1Text, bodyText } = fonts;
const { small350 } = fontSizes;
const { space50, space100 } = spacing;
const { size200 } = dimensions;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: space50,
    paddingVertical: space50,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: background,
    width: "100%",
  },
  detailsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsBody: {
    flex: 8,
  },
  openDescIcon: {
    flex: 1,
  },
  businessName: {
    fontFamily: h1Text,
    fontSize: small350,
    color: text,
  },
  address: {
    fontFamily: bodyText,
    fontSize: small350,
    color: text,
  },
  status: {
    fontFamily: bodyText,
    fontSize: small350,
  },
  statusMessage: {
    color: text,
  },
  open: {
    color: open,
  },
  closed: {
    color: closed,
  },

  icon: {
    height: size200,
    width: size200,
    color: secondary,
  },
  services: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: space100,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceLabel: {
    fontFamily: bodyText,
    fontSize: small350,
    marginLeft: space50,
  },
});

export default StoreDescBottomTab;
