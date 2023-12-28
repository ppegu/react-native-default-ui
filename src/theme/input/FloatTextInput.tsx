import React from "react";
import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import useTheme from "../useTheme";
import { Center, View, type ViewProps } from "../views/View";
import TextInput, { INPUT_SIZES, type TextInputProps } from "./TextInput";

export type FloatTextInputProps = TextInputProps & {
  label?: string;
  suffix?: any;
  background?: string;
  containerStyle?: ViewProps;
};

export default function FloatTextInput({
  label,
  suffix,
  background,
  containerStyle,
  ...rest
}: FloatTextInputProps) {
  const { colors, fontSizes } = useTheme();

  if (!background) background = "transparent";

  const [isFocused, setIsFcused] = useState(false);

  let inputHeight = INPUT_SIZES[rest.size || "md"];

  const animationValue = useRef(new Animated.Value(0)).current;

  const handleFocus = (e?: any) => {
    setIsFcused(true);
    rest.onFocus?.(e);
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(zIndexValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (rest.value === " " || rest.value == "") return;
    if (!isFocused) handleFocus();
  }, [rest.value]);

  const handleBlur = (e: any) => {
    rest.onBlur?.(e);

    if (rest.value) return;
    setIsFcused(false);
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(zIndexValue, {
      toValue: -1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const zIndexValue = useRef(new Animated.Value(-1)).current;

  const labelStyle = {
    left: 10,
    top: animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [inputHeight / 3.5, -inputHeight / 5.2],
    }),
    fontSize: animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [fontSizes.sm, fontSizes.xs],
    }),
    color: colors.text,
    backgroundColor: animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["transparent", background],
    }),
    zIndex: zIndexValue.interpolate({
      inputRange: [-1, 1],
      outputRange: [-1, 1],
    }),
  };

  return (
    <View {...containerStyle}>
      <Animated.Text
        style={{
          ...labelStyle,
          position: "absolute",
          fontWeight: "600",
          paddingHorizontal: 2,
          zIndex: labelStyle.zIndex,
        }}
      >
        {label}
      </Animated.Text>
      <TextInput {...rest} onBlur={handleBlur} onFocus={handleFocus} />
      {suffix && (
        <Center position="absolute" right={10} top={0} bottom={0}>
          {suffix}
        </Center>
      )}
    </View>
  );
}
