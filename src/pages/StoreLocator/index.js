import React, { useMemo, useCallback } from "react";
import { View, Pressable, Text, Linking, Platform } from "react-native";
import useStyles from "./useStyles";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
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
import useFetch from "../../hooks/useFetch";

SplashScreen.preventAutoHideAsync();

const StoreLocator = () => {
  const { responses } = useFetch([
    {
      url: "store",
    },
  ]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDjSbuciCG_WhfljJSQp1jMtRKYKKGkACI",
  });
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const center = useMemo(() => {
    if (responses.length > 0) {
      const store = responses[0].map((doc) => doc.data());
      return {
        lat: parseFloat(store[0].latitude),
        lng: parseFloat(store[0].longitude),
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
  const store =
    responses.length > 0 ? responses[0].map((doc) => doc.data())[0] : [];

  const { boobaPin } = imagePaths;
  return (
    <View style={styles.container}>
      {isLoaded && responses.length > 0 && (
        <View style={styles.container}>
          <Pressable
            style={styles.directionsBtn}
            onPress={() =>
              Platform.OS === "ios"
                ? Linking.openURL(
                    `http://maps.apple.com/?daddr=${store.latitude},${store.longitude}`
                  )
                : Linking.openURL("https://goo.gl/maps/HWgoVRhekFdWE6sP7")
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
          <StoreDescBottomTab details={store} />
        </View>
      )}
    </View>
  );
};

export default StoreLocator;
