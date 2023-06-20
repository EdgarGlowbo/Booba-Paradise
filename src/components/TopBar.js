import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

const TopBar = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faBars} />
      <View>
        <Text>Booba</Text>
        <Text>Paradise</Text>
      </View>
      <FontAwesomeIcon icon={faLocationDot} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TopBar;
