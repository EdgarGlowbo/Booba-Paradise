import Landing from "../pages/Landing";
import StoreLocator from "../pages/StoreLocator";
import StoreDescription from "../pages/StoreDescription";
import Menu from "../pages/Menu";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BurgerMenu from "../components/TopBar/BurgerMenu";
import LocationPin from "../components/TopBar/LocationPin";
import BrandName from "../components/TopBar/BrandName";
// import CustomHeader from "../components/TopBar/CustomHeader";
import CustomDrawer from "../components/CustomDrawer";
import CustomHeader from "../components/TopBar/CustomHeader";

const Drawer = createDrawerNavigator();

const Navigator = () => {
  const DrawerNav = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          header: () => <CustomHeader />,
        }}
      >
        <Drawer.Screen
          name="Landing"
          component={Landing}
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen
          name="Menu"
          component={Menu}
          options={{ drawerLabel: "Nuestro Menú" }}
        />
        <Drawer.Screen
          name="StoreLocator"
          component={StoreLocator}
          options={{ drawerLabel: "¡Encuéntranos!" }}
        />
        <Drawer.Screen
          name="StoreDescription"
          component={StoreDescription}
          options={{ drawerLabel: "Horario de Servicio" }}
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

export default Navigator;
