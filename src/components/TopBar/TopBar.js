import React from "react";
import { View, Text, StyleSheet } from "react-native";
import style from "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

const TopBar = () => {
  console.log({ style });
  return (
    <View style={style.container}>
      <FontAwesomeIcon icon={faBars} />
      <View>
        <Text>Booba</Text>
        <Text>Paradise</Text>
      </View>
      <FontAwesomeIcon icon={faLocationDot} />
    </View>
  );
};

export default TopBar;
