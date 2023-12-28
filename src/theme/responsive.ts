import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import type { ViewProps } from "./views/View";

export const SCREEN_WIDTH = widthPercentageToDP(100);

export const SCREEN_HEIGHT = heightPercentageToDP(100);

export const hp = (percentage: number) =>
  (percentage * heightPercentageToDP(100)) / 100;
export const wp = (percentage: number) =>
  (percentage * widthPercentageToDP(100)) / 100;

export const isSmallDevice = hp(100) < 700;

export const BUTTON_HEIGHT = 40;

export const ABSOLUTE_STYLE: ViewProps = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
