import { fontSizes, fontWeights } from "./fonts";

const theme = {
  colors: {
    text: "#fff",
    primary: "#fff",
    secondary: "#1d1c1d",
    error: "#bc0c0c",
    success: "#419311",
    bottomBackground: "#5f1038",
    search: "#484247",
    red: "#f32b2e",
    green: "#419311",
    violet: "#8000FF",
    background1: "#08040d",
    background2: "#231a2d",
    border: "#fff",
    button: "#4a29a9",
    buttonText: "#fff",
    bottombar: "#5f1038",
    disabled: "#6d6d6d",
  },
  fonts: fontWeights,
  fontSizes: fontSizes,
};

export type AppColors = typeof theme.colors;
export type AppFonts = typeof theme.fonts;
export type AppFontSizes = typeof theme.fontSizes;

export default function useTheme() {
  return theme;
}
