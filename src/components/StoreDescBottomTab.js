import React, { useCallback } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { colors, fontSizes, fonts } from "../variables";
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
const { small300 } = fontSizes;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: background,
    width: Dimensions.get("screen").width,
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
    fontSize: small300,
    color: text,
  },
  address: {
    fontFamily: bodyText,
    fontSize: small300,
    color: text,
  },
  status: {
    fontFamily: bodyText,
    fontSize: small300,
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
    height: 16,
    width: 16,
    color: secondary,
  },
  services: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: 8,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceLabel: {
    fontFamily: bodyText,
    fontSize: small300,
    marginLeft: 5,
  },
});

export default StoreDescBottomTab;
