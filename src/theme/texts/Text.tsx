import React from "react";
import {
  Text as DefaulText,
  type TextProps as DefaultTextProps,
  type TextStyle,
} from "react-native";
import { isSmallDevice } from "../responsive";
import useTheme, {
  type AppColors,
  type AppFontSizes,
  type AppFonts,
} from "../useTheme";

export type TextProps = DefaultTextProps &
  TextStyle & {
    size?: keyof AppFontSizes;
    weight?: keyof AppFonts;
    color?: keyof AppColors | string;
  };

export function Text({
  children,
  size = "regular",
  weight = "regular",
  color = "text",
  numberOfLines,
  style,
  ...rest
}: TextProps) {
  const { fonts, fontSizes, colors } = useTheme();

  let fontStyle: TextStyle = {
    fontSize: size && fontSizes[size],
    // @ts-ignore
    color: colors[color] || color,
  };

  // if(typeof color === keyof AppColors)

  if (weight) fontStyle = { ...fontStyle, ...fonts[weight] };

  if (!isSmallDevice && fontStyle.fontSize) fontStyle.fontSize += 2;

  return (
    <DefaulText
      numberOfLines={numberOfLines}
      {...rest}
      style={[fontStyle, style, rest]}
    >
      {children}
    </DefaulText>
  );
}
