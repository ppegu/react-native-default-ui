import React, { createContext, type ReactNode } from "react";
import { DEFAULT_COLORS } from "./default";
import { DEFAULT_FONTSIZES, getFontWeights } from "./fonts";
import type { AppFonts } from "./useTheme";

export type ThemeContextValue = {
  dark: false;
  initializing: true;
  fonts: AppFonts;
  colors: typeof DEFAULT_COLORS;
  fontSizes: typeof DEFAULT_FONTSIZES;
};

export const ThemeContext = createContext<ThemeContextValue>({
  dark: false,
  initializing: true,
  fonts: getFontWeights(""),
  colors: DEFAULT_COLORS,
  fontSizes: DEFAULT_FONTSIZES,
});

export type ThemeProviderProps = {
  children: ReactNode;
  theme?: {
    fontFamilyName?: string;
    colors?: typeof DEFAULT_COLORS;
    fontSizes?: typeof DEFAULT_FONTSIZES;
  };
};

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const fonts = getFontWeights(theme?.fontFamilyName || "undefined");
  const colors = theme?.colors || DEFAULT_COLORS;

  const fontSizes = theme?.fontSizes || DEFAULT_FONTSIZES;

  return (
    <ThemeContext.Provider
      value={{
        dark: false,
        initializing: true,
        fonts,
        colors,
        fontSizes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
