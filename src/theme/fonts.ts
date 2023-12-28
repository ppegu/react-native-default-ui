import { Platform } from "react-native";
import { wp } from "./responsive";

const fontSize = wp(5);

export const fontSizes = {
  xs: fontSize - 8,
  sm: fontSize - 4,
  regular: fontSize,
  md: fontSize + 2,
  lg: fontSize + 4,
  xl: fontSize + 6,
  "2xl": fontSize + 8,
  "3xl": fontSize + 10,
  "4xl": fontSize + 12,
};

export const fontWeights = {
  thin: {
    fontFamily: Platform.select({
      android: "Montserrat-Light",
      ios: "Montserrat-Light",
      web: "Montserrat-Light",
    }),
  },
  regular: {
    fontFamily: Platform.select({
      android: "Montserrat-Regular",
      ios: "Montserrat-Regular",
      web: "Montserrat-Regular",
    }),
  },
  semiBold: {
    fontFamily: Platform.select({
      android: "Montserrat-SemiBold",
      ios: "Montserrat-SemiBold",
      web: "Montserrat-SemiBold",
    }),
  },
  bold: {
    fontFamily: Platform.select({
      android: "Montserrat-Bold",
      ios: "Montserrat-Bold",
      web: "Montserrat-Bold",
    }),
  },
  extraBold: {
    fontFamily: Platform.select({
      android: "Montserrat-Bold",
      ios: "Montserrat-Bold",
      web: "Montserrat-Bold",
    }),
  },
};
