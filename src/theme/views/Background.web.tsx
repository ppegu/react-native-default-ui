import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import LinearGradient from "react-native-web-linear-gradient";
import useTheme from "../useTheme";

export type BackgroundProps = {
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  colors?: (string | number)[];
};

export default function Background({
  children,
  containerStyle = { flex: 1 },
  colors,
}: BackgroundProps) {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={colors || [theme.colors.background1, theme.colors.background2]}
      style={[
        {
          paddingTop: 5,
        },
        containerStyle,
      ]}
    >
      {children}
    </LinearGradient>
  );
}
