import React, { useMemo, useCallback } from "react";
import { View, Pressable, Text, Linking } from "react-native";
import useStyles from "./useStyles";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../../apis/credentials";
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
import { imagePaths } from "../../variables";

SplashScreen.preventAutoHideAsync();

const StoreLocator = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

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
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const center = useMemo(() => {
    if (responses.length > 0) {
      return {
        lat: parseFloat(responses[0][0].latitude),
        lng: parseFloat(responses[0][0].longitude),
      };
    }
  }, [responses]);
  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  const styles = useStyles();
  if (!fontsLoaded) {
    return null;
  }

  const { boobaPin } = imagePaths;
  return (
    <View style={styles.container}>
      {isLoaded && responses.length > 0 && (
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
                url: boobaPin,
                scaledSize: new google.maps.Size(48, 48 * (85 / 64)),
              }}
            />
          </GoogleMap>
          <StoreDescBottomTab details={responses[0][0]} />
        </View>
      )}
    </View>
  );
};

export default StoreLocator;
