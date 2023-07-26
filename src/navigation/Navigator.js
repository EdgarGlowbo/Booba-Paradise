import { useCallback } from "react";
import { Landing, StoreLocator, StoreDescription, Menu } from "../pages";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import CustomHeader from "../components/TopBar/CustomHeader";
import { colors, dimensions, fontSizes, fonts, spacing } from "../variables";
import { StyleSheet } from "react-native";
import { useFonts } from "@expo-google-fonts/poppins/useFonts";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Navigator = () => {
  const LandingStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    );
  };
  const LocationStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StoreLocator" component={StoreLocator} />
        <Stack.Screen name="StoreDescription" component={StoreDescription} />
      </Stack.Navigator>
    );
  };
  const DrawerNav = () => {
    const [fontsLoaded] = useFonts({
      Poppins_700Bold,
    });

    useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerTransparent: true,
          header: () => <CustomHeader />,
          drawerStyle: styles.drawerStyles,
          drawerItemStyle: styles.drawerItemStyles,
          drawerLabelStyle: styles.drawerLabelStyles,
          drawerActiveBackgroundColor: colors.drawerBackground,
          drawerActiveTintColor: colors.background,
        }}
      >
        <Drawer.Screen
          name="LandingStack"
          component={LandingStack}
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen
          name="Menu"
          component={Menu}
          options={{ drawerLabel: "Nuestro Menú", headerShown: false }}
        />
        <Drawer.Screen
          name="LocationStack"
          component={LocationStack}
          options={{
            drawerLabel: "¡Encuéntranos!",
            header: () => (
              <CustomHeader backgroundColor={styles.storeLocatorHeaderColor} />
            ),
          }}
        />
        <Drawer.Screen
          name="StoreDescription"
          component={StoreDescription}
          options={{
            drawerLabel: "Horario de Servicio",
            header: () => (
              <CustomHeader backgroundColor={styles.storeDescHeaderColor} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

const { background, text } = colors.drawer;
// Special backgroundColor as prop
const storeLocatorColors = colors.storeLocator;
const storeDescColors = colors.storeDesc;

const { h1Text } = fonts;
const { large550 } = fontSizes;
const { size5175 } = dimensions;
const { space150, space1000 } = spacing;
const styles = StyleSheet.create({
  drawerStyles: {
    width: size5175,
    backgroundColor: background,
  },
  drawerItemStyles: {
    padding: space150,
    borderRadius: 0,
    width: "100%",
    marginHorizontal: 0,
    marginVertical: 0,
  },
  drawerLabelStyles: {
    fontFamily: h1Text,
    fontSize: large550,
    color: text,
  },
  storeLocatorHeaderColor: {
    backgroundColor: storeLocatorColors.primary,
  },
  storeDescHeaderColor: {
    backgroundColor: storeDescColors.primary,
  },
});
export default Navigator;
