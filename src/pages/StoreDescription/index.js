import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./styles";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/api_instance";
import useBusinessStatus from "../../hooks/useBusinessStatus";
import { colors, fonts } from "../../variables";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { useNavigation } from "@react-navigation/native";

const StoreDescription = () => {
  const { response } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    url: "location",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  const navigation = useNavigation();
  const storeDetails = (data) => {
    data.opening_hours.sort((a, b) => a.id - b.id);

    return response[0];
  };

  const { name, address, opening_hours } = response
    ? storeDetails(response[0])
    : [];

  const { isOpen, status, message } = opening_hours
    ? useBusinessStatus(new Date(), opening_hours)
    : {};

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.goBackBtnContainer}
      >
        <FontAwesomeIcon
          icon={faXmark}
          style={[styles.icon, { color: colors.headerBackground }]}
        />
      </Pressable>
      <View style={[styles.businessNameContainer, styles.row]}>
        <Image
          source={require("../../../assets/boobaPin.png")}
          style={styles.icon}
        />
        <Text style={styles.businessName}>Booba Paradise</Text>
      </View>
      <View style={[styles.addressContainer, styles.row]}>
        <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
        <Text style={styles.address}>{address}</Text>
      </View>
      <View style={[styles.businessHoursContainer, styles.row]}>
        <View style={styles.headerContainer}>
          <FontAwesomeIcon icon={faClock} style={styles.icon} />
          <Text
            style={[
              styles.status,
              isOpen ? { color: colors.open } : { color: colors.closed },
            ]}
          >
            {status}: <Text style={styles.statusMessage}>{message}</Text>
          </Text>
          <FontAwesomeIcon
            icon={faCaretDown}
            style={[styles.icon, { color: colors.headerBackground }]}
          />
        </View>
        <View style={styles.businessHoursTable}>
          {name &&
            opening_hours.map((weekday) => (
              <View style={styles.row} key={weekday.id}>
                <Text style={styles.weekday}>{weekday.name}</Text>
                <Text style={styles.hours}>{weekday.businessHours}</Text>
              </View>
            ))}
        </View>
        <View style={[styles.servicesContainer, styles.row]}>
          <Text style={styles.servicesTitle}>Servicios</Text>
          <View style={styles.serviceItem}>
            <FontAwesomeIcon icon={faStore} style={styles.icon} />
            <Text style={styles.serviceLabel}>Para comer aquí</Text>
          </View>
          <View style={styles.serviceItem}>
            <FontAwesomeIcon icon={faBagShopping} style={styles.icon} />
            <Text style={styles.serviceLabel}>Para llevar</Text>
          </View>
        </View>
        <View style={[styles.btnContainer, styles.row]}>
          <Pressable style={styles.directionsBtn}>
            <Text>Cómo llegar</Text>
            <FontAwesomeIcon
              icon={faCaretRight}
              style={[styles.icon, { color: colors.headerBackground }]}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default StoreDescription;
