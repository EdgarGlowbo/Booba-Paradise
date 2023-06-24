import DrawerMenu from "../pages/DrawerMenu";
import Landing from "../pages/Landing";
import StoreLocator from "../pages/StoreLocator";
import Menu from "../pages/Menu";
import StoreDescription from "../pages/StoreDescription";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const TopBarStack = createStackNavigator({ Landing, StoreLocator, DrawerMenu });

const DrawerNav = createDrawerNavigator({
  TopBarStack,
  Menu,
  StoreDescription,
});

export default DrawerNav;
