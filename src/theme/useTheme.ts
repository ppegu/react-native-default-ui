import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import type { DEFAULT_COLORS } from "./default";
import { DEFAULT_FONTSIZES } from "./fonts";

export type AppColors = typeof DEFAULT_COLORS;

export type AppFonts = {
  thin: {
    fontFamily: string | undefined;
  };
  regular: {
    fontFamily: string | undefined;
  };
  semiBold: {
    fontFamily: string | undefined;
  };
  bold: {
    fontFamily: string | undefined;
  };

  extraBold: {
    fontFamily: string | undefined;
  };
};

export type AppFontSizes = typeof DEFAULT_FONTSIZES;

export default function useTheme() {
  const theme = useContext(ThemeContext);

  return theme;
}
