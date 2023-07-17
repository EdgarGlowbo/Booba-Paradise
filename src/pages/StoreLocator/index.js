import React, { useMemo, useCallback } from "react";
import { View, Pressable, Text, Linking } from "react-native";
import styles from "./styles";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../../apis/apiKeys";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../apis/api_instance";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import StoreDescBottomTab from "../../components/StoreDescBottomTab";

SplashScreen.preventAutoHideAsync();

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
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const center = useMemo(() => {
    if (response) {
      return {
        lat: parseFloat(response[0].latitude),
        lng: parseFloat(response[0].longitude),
      };
    }
  }, [response]);
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
      {isLoaded && response && (
        <View style={styles.container}>
          <Pressable
            style={styles.directionsBtn}
            onPress={() =>
              Linking.openURL("https://goo.gl/maps/HWgoVRhekFdWE6sP7")
            }
          >
            <Text style={styles.text}>Cómo llegar</Text>
            <FontAwesomeIcon icon={faCaretRight} style={styles.icon} />
          </Pressable>
          <GoogleMap
            zoom={19}
            center={center}
            mapContainerStyle={styles.map}
            options={{
              zoomControl: false,
              fullscreenControl: false,
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
