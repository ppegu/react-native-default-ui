import { Platform } from "react-native";
import { wp } from "./responsive";

const fontSize = wp(5);

export const DEFAULT_FONTSIZES = {
  "xs": fontSize - 8,
  "sm": fontSize - 4,
  "regular": fontSize,
  "md": fontSize + 2,
  "lg": fontSize + 4,
  "xl": fontSize + 6,
  "2xl": fontSize + 8,
  "3xl": fontSize + 10,
  "4xl": fontSize + 12,
};

export const getFontWeights = (familyName: string) => ({
  thin: {
    fontFamily: Platform.select({
      android: `${familyName}-Light`,
      ios: `${familyName}-Light`,
      web: `${familyName}-Light`,
    }),
  },
  regular: {
    fontFamily: Platform.select({
      android: `${familyName}-Regular`,
      ios: `${familyName}-Regular`,
      web: `${familyName}-Regular`,
    }),
  },
  semiBold: {
    fontFamily: Platform.select({
      android: `${familyName}-SemiBold`,
      ios: `${familyName}-SemiBold`,
      web: `${familyName}-SemiBold`,
    }),
  },
  bold: {
    fontFamily: Platform.select({
      android: `${familyName}-Bold`,
      ios: `${familyName}-Bold`,
      web: `${familyName}-Bold`,
    }),
  },
  extraBold: {
    fontFamily: Platform.select({
      android: `${familyName}-Bold`,
      ios: `${familyName}-Bold`,
      web: `${familyName}-Bold`,
    }),
  },
});
