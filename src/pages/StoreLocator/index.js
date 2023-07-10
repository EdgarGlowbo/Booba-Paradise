import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MapView, Marker } from "react-native-maps";
import axiosInstance from "../../apis/api_instance";
const StoreLocator = () => {
  const { response } = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    url: "/location",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  const [origin, setOrigin] = useState({});
  return (
    <View style={styles.container}>
      {response && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: response.latitude,
            longitude: response.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <Marker
            coordinate={{
              latitude: response.latitude,
              longitude: response.longitude,
            }}
          />
        </MapView>
      )}
    </View>
  );
};

export default StoreLocator;
