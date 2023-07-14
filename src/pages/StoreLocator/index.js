import React, { useMemo } from "react";
import { View } from "react-native";
import styles from "./styles";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/api_instance";

const StoreLocator = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
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
          zoom={19}
          center={center}
          mapContainerStyle={styles.map}
          mapTypeId="b02691dcbf5e47e6"
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            // clickableIcons: true,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </View>
  );
};

export default StoreLocator;
