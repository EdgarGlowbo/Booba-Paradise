import React, { useMemo } from "react";
import { View } from "react-native";
import styles from "./styles";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../../apis/apiKeys";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/api_instance";
import StoreDescBottomTab from "../../components/StoreDescBottomTab";

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
        <View style={styles.container}>
          <GoogleMap
            zoom={19}
            center={center}
            mapContainerStyle={styles.map}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              mapId: "7dc31171051eccc4",
            }}
          >
            <MarkerF
              position={center}
              icon={{
                url: require("../../../assets/boobaPin.png"),
                scaledSize: new google.maps.Size(64, 64),
              }}
            />
          </GoogleMap>
          <StoreDescBottomTab details={response[0]} />
        </View>
      )}
    </View>
  );
};

export default StoreLocator;
