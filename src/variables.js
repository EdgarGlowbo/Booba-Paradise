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
    accentT60: "#aedcd0",
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
const fontUnit = 4;
const fontSizeFactor = 1 / 3;
export const fontSizes = {
  small100: moderateScale(fontUnit, fontSizeFactor),
  small200: moderateScale(fontUnit * 2, fontSizeFactor),
  small300: moderateScale(fontUnit * 3, fontSizeFactor),
  small350: moderateScale(fontUnit * 3.5, fontSizeFactor),
  regular400: moderateScale(fontUnit * 4, fontSizeFactor),
  large450: moderateScale(fontUnit * (9 / 2), fontSizeFactor),
  large500: moderateScale(fontUnit * 5, fontSizeFactor),
  large550: moderateScale(fontUnit * (11 / 2), fontSizeFactor),
  large600: moderateScale(fontUnit * 6, fontSizeFactor),
  large900: moderateScale(fontUnit * 9, fontSizeFactor),
};

// Preload image modules
export const imagePaths = {
  mobileLandingWavyBackground: require("../assets/mobileLandingWavyBackground.jpg"),
  desktopLandingWavyBackground: require("../assets/desktopLandingWavyBackground.jpg"),
  mobileMenuWavyBackground: require("../assets/mobileMenuWavyBackground.jpg"),
  desktopMenuWavyBackground: require("../assets/desktopMenuWavyBackground.jpg"),
  boobaPin: require("../assets/boobaPin.png"),
  boobaTypo: require("../assets/brandName.png"),
};

const spacingUnit = 8;
const spacingFactor = 1 / 3;

export const spacing = {
  space50: moderateScale(spacingUnit * (1 / 2), spacingFactor),
  space100: moderateScale(spacingUnit, spacingFactor),
  space150: moderateScale(spacingUnit * (3 / 2), spacingFactor),
  space200: moderateScale(spacingUnit * 2, spacingFactor),
  space250: moderateScale(spacingUnit * 2.5, spacingFactor),
  space300: moderateScale(spacingUnit * 3, spacingFactor),
  space400: moderateScale(spacingUnit * 4, spacingFactor),
  space500: moderateScale(spacingUnit * 5, spacingFactor),
  space600: moderateScale(spacingUnit * 6, spacingFactor),
  space800: moderateScale(spacingUnit * 8, spacingFactor),
  space850: moderateScale(spacingUnit * 8.5, spacingFactor),
  space900: moderateScale(spacingUnit * 9, spacingFactor),
  space1000: moderateScale(spacingUnit * 10, spacingFactor),
};

const dimensionsFactor = 1 / 3;

export const dimensions = {
  size100: moderateScale(spacingUnit, dimensionsFactor),
  size200: moderateScale(spacingUnit * 2, dimensionsFactor),
  size300: moderateScale(spacingUnit * 3, dimensionsFactor),
  size400: moderateScale(spacingUnit * 4, dimensionsFactor),
  size600: moderateScale(spacingUnit * 6, dimensionsFactor),
  size800: moderateScale(spacingUnit * 8, dimensionsFactor),
  size900: moderateScale(spacingUnit * 9, dimensionsFactor),
  size1000: moderateScale(spacingUnit * 10, dimensionsFactor),
  size1800: moderateScale(spacingUnit * 18, spacingFactor),
  size1900: moderateScale(spacingUnit * 19, spacingFactor),
  size3050: moderateScale(spacingUnit * 30.5, spacingFactor),
  size5175: moderateScale(spacingUnit * 51.75, spacingFactor),
};

const radiusUnit = 4;
const radiusFactor = 1 / 3;
export const radius = {
  radius100: moderateScale(radiusUnit, radiusFactor),
  radius200: moderateScale(radiusUnit * 2, radiusFactor),
  radius300: moderateScale(radiusUnit * 3, radiusFactor),
  radius400: moderateScale(radiusUnit * 4, radiusFactor),
  radius800: moderateScale(radiusUnit * 8, radiusFactor),
};
export const levels = {
  level1: 1,
  level2: 2,
};
