import React, { useState, useCallback } from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";
import ImageResponsive from "../../components/ImageResponsive";
import useStyles from "./useStyles";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/api_instance";
import useBusinessStatus from "../../hooks/useBusinessStatus";
import { colors, imagePaths } from "../../variables";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const StoreDescription = () => {
  const [isShown, setIsShown] = useState(false);
  const { responses } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    urls: ["location"],
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  const navigation = useNavigation();
  const storeDetails = (data) => {
    data.opening_hours.sort((a, b) => a.id - b.id);

    return responses[0][0];
  };
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  const styles = useStyles();
  if (!fontsLoaded) {
    return null;
  }

  const { name, address, opening_hours } =
    responses.length > 0 ? storeDetails(responses[0][0]) : [];

  const { isOpen, status, message, weekdayIndex } = opening_hours
    ? useBusinessStatus(new Date(), opening_hours)
    : {};

  const { boobaPin } = imagePaths;

  return (
    <View style={styles.container}>
      <View style={styles.goBackBtnContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            style={[styles.icon, styles.crossGoBack]}
          />
        </Pressable>
      </View>

      <View style={[styles.businessNameContainer, styles.row]}>
        <ImageResponsive
          source={{
            sourceWidth: 32,
            uri: boobaPin,
          }}
          aspectRatio={64 / 85}
        />
        <Text style={styles.businessName}>Booba Paradise</Text>
      </View>
      <View style={[styles.addressContainer, styles.row]}>
        <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
        <Text style={[styles.address, styles.text]}>{address}</Text>
      </View>
      <View style={[styles.row, styles.businessHoursContainer]}>
        <FontAwesomeIcon icon={faClock} style={[styles.icon, styles.clock]} />

        <View style={styles.headerContainer}>
          <Pressable
            style={styles.statusContainer}
            onPress={() => {
              setIsShown(!isShown);
            }}
          >
            <Text style={[styles.text, isOpen ? styles.open : styles.closed]}>
              {status}:{" "}
              <Text style={[styles.text, styles.statusMessage]}>{message}</Text>
            </Text>

            <FontAwesomeIcon
              icon={isShown ? faCaretUp : faCaretDown}
              style={[
                styles.icon,
                { color: colors.headerBackground, margin: 0 },
              ]}
            />
          </Pressable>
          {isShown && (
            <View style={styles.businessHoursTable}>
              {name &&
                opening_hours.map((weekday) => (
                  <View style={styles.businessRow} key={weekday.id}>
                    <Text
                      style={[
                        styles.weekday,
                        styles.text,
                        weekdayIndex === weekday.id ? styles.today : null,
                      ]}
                    >
                      {weekday.name}
                    </Text>
                    <Text
                      style={[
                        styles.hours,
                        styles.text,
                        weekdayIndex === weekday.id ? styles.today : null,
                      ]}
                    >
                      {weekday.businessHours}
                    </Text>
                  </View>
                ))}
            </View>
          )}
        </View>
      </View>
      <Text style={[styles.servicesTitle, styles.row]}>Servicios</Text>
      <View style={[styles.servicesContainer, styles.row]}>
        <View style={styles.serviceItem}>
          <FontAwesomeIcon icon={faStore} style={styles.icon} />
          <Text style={[styles.serviceLabel, styles.text]}>
            Para comer aquí
          </Text>
        </View>
        <View style={styles.serviceItem}>
          <FontAwesomeIcon icon={faBagShopping} style={styles.icon} />
          <Text style={[styles.serviceLabel, styles.text]}>Para llevar</Text>
        </View>
      </View>
      <View style={[styles.btnContainer, styles.row]}>
        <Pressable
          style={styles.directionsBtn}
          onPress={() =>
            Linking.openURL("https://goo.gl/maps/HWgoVRhekFdWE6sP7")
          }
        >
          <Text style={styles.text}>Cómo llegar</Text>
          <FontAwesomeIcon
            icon={faCaretRight}
            style={[styles.icon, styles.caretRight]}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default StoreDescription;
