import { scale, moderateScale } from "react-native-size-matters";

export const colors = {
  landing: {
    text: "#292321",
    background: "#fffcf9",
    primary: "#401c48",
    primaryS1: "#3c3346",
    secondary: "#652e72",
    secondaryT1: "#e0d5e3",
    accent: "#35a78a",
  },
  // menu: {
  //   background: "#fffcf9",
  //   text: "#292321",
  //   primary: "#80050b",
  //   primaryS1: "#320104",
  //   secondary: "#a14343",
  //   accent: "#d64951",
  // },
  // Barbie Menu
  menu: {
    background: "#fffcf9",
    text: "#292321",
    primary: "#720336",
    primaryS1: "#500226",
    secondary: "#c31e6b",
    accent: "#ca2faf",
  },
  drawer: {
    background: "#3c3346",
    text: "#fffcf9",
  },
  storeLocator: {
    text: "#292321",
    background: "#fffcf9",
    primary: "#292321",
    secondary: "#ce4b27",
    accent: "#35a78a",
    open: "#377b48",
    closed: "#ed1b24",
  },
  storeDesc: {
    text: "#292321",
    background: "#fffcf9",
    primary: "#292321",
    secondary: "#ce4b27",
    accent: "#35a78a",
    open: "#377b48",
    closed: "#ed1b24",
  },
  footer: {
    text: "#fffcf9",
    hyperlink: "#c4ecf7",
  },
  topBar: {
    text: "#fffcf9",
  },
};

export const fonts = {
  bodyText: "Poppins_400Regular",
  h1Text: "Poppins_600SemiBold",
  h2Text: "Poppins_500Medium",
  cursiveHeader: "Damion_400Regular",
};

export const fontSizes = {
  small100: moderateScale(10),
  small200: moderateScale(12),
  small300: moderateScale(14),
  regular400: moderateScale(16),
  large450: moderateScale(22),
  large500: moderateScale(24),
  large550: moderateScale(28),
  large600: moderateScale(32),
  large900: moderateScale(48),
};

// Preload image modules
export const imagePaths = {
  mobileLandingWavyBackground: require("../assets/mobileLandingWavyBackground.jpg"),
  desktopLandingWavyBackground: require("../assets/desktopLandingWavyBackground.jpg"),
  mobileMenuWavyBackground: require("../assets/mobileMenuWavyBackground.jpg"),
  desktopMenuWavyBackground: require("../assets/desktopMenuWavyBackground.jpg"),
  boobaPin: require("../assets/boobaPin.png"),
};
