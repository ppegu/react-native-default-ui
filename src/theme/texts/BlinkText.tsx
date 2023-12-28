import React, { useEffect, useRef } from "react";
import useTheme from "../useTheme";
import { Animated } from "react-native";

export default function BlinkText({ children }: any) {
  const { colors } = useTheme();

  const opacityValue = useRef(new Animated.Value(1)).current;

  const startAnimation = (reverse = false) => {
    Animated.timing(opacityValue, {
      toValue: reverse ? 0.2 : 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      opacityValue.setValue(reverse ? 1 : 0.2);
      startAnimation(!reverse);
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Animated.Text style={[{ color: colors.text, opacity: opacityValue }]}>
      {children}
    </Animated.Text>
  );
}
