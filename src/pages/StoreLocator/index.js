import React, { useMemo, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
// import { MapView, Marker } from "react-native-maps";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../../apis/apiKey";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/api_instance";

const StoreLocator = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

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

  const center = useMemo(() => {
    if (response) {
      return {
        lat: parseFloat(response[0].latitude),
        lng: parseFloat(response[0].longitude),
      };
    }
  }, [response]);
  return (
    <View style={styles.container}>
      {isLoaded && response && (
        <GoogleMap
          zoom={17}
          center={center}
          mapContainerStyle={styles.map}
          streetView={false}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </View>
  );
};

export default StoreLocator;
