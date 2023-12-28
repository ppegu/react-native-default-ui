import React, { useEffect, useState } from "react";
import {
  Platform,
  StatusBar,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import BackdropLoading from "../loaders/BackdropLoading";
import useTheme from "../useTheme";
import { hp } from "../responsive";

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

  const [timer, setTimer] = useState(1);

  useEffect(() => {
    setTimeout(() => setTimer(0), 100);
  }, []);

  return (
    <LinearGradient
      colors={colors || [theme.colors.background1, theme.colors.background2]}
      style={[
        {
          paddingTop:
            Platform.OS === "android" ? StatusBar.currentHeight : hp(2.2),
        },
        containerStyle,
      ]}
    >
      {timer > 0 && <BackdropLoading loading />}

      {timer === 0 && children}
    </LinearGradient>
  );
}
