import React from "react";
import {
  ActivityIndicator,
  type GestureResponderEvent,
  type StyleProp,
  TouchableOpacity,
  type ViewStyle,
} from "react-native";
import { ABSOLUTE_STYLE, BUTTON_HEIGHT } from "../responsive";
import { Text, type TextProps } from "../texts/Text";
import useTheme, { type AppColors } from "../useTheme";
import { Center, View, type ViewProps } from "../views/View";

const SIZES = {
  "xs": BUTTON_HEIGHT - 10,
  "sm": BUTTON_HEIGHT - 5,
  "default": BUTTON_HEIGHT,
  "md": BUTTON_HEIGHT + 5,
  "lg": BUTTON_HEIGHT + 10,
  "xl": BUTTON_HEIGHT + 15,
  "2xl": BUTTON_HEIGHT + 250,
};

export type ButtonProps = ViewProps & {
  // eslint-disable-next-line no-unused-vars
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  type?: "outlined" | "solid" | "link" | undefined;
  color?: string;
  textStyle?: TextProps;
  loading?: boolean;
  disabled?: boolean;
  size?: keyof typeof SIZES;
  background?: keyof AppColors;
};

export default function Button({
  children,
  onPress,
  type = "solid",
  textStyle,
  loading,
  disabled,
  size = "default",
  ...rest
}: ButtonProps) {
  const { colors } = useTheme();

  let styles: StyleProp<ViewStyle> = {
    height: SIZES[size],
    borderRadius: SIZES[size] / 4.5,
    backgroundColor: type === "solid" ? colors.button : "transparent",
    borderWidth: type === "outlined" ? 0.5 : 0,
    borderColor: type === "outlined" ? colors.border : "",
  };

  if (rest.background) styles.backgroundColor = colors[rest.background];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles, rest]}
      disabled={loading || disabled}
    >
      <View flex={1} padding={5} paddingHorizontal={10}>
        <View flex={1} alignItems="center" justifyContent="center">
          {typeof children === "string" ? (
            <Text {...textStyle} weight="bold">
              {children}
            </Text>
          ) : (
            children
          )}
          {loading && (
            <Center {...ABSOLUTE_STYLE}>
              <ActivityIndicator color={colors.buttonText} />
            </Center>
          )}
        </View>
      </View>
      {disabled && (
        <View
          {...ABSOLUTE_STYLE}
          backgroundColor="grey"
          opacity={0.85}
          borderRadius={styles.borderRadius}
          zIndex={-1}
        ></View>
      )}
    </TouchableOpacity>
  );
}
