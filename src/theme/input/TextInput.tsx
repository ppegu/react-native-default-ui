import React from "react";
import {
  TextInput as DefaultTextInput,
  type TextInputProps as DefaultTextInputProps,
} from "react-native";
import useTheme from "../useTheme";

export const INPUT_SIZES = {
  xs: 35,
  sm: 40,
  md: 50,
  lg: 55,
  xl: 60,
};

export type TextInputProps = DefaultTextInputProps & {
  size?: keyof typeof INPUT_SIZES;
  hasError?: boolean;
  type?: "number";
};

export default function TextInput({
  size = "md",
  hasError,
  style,
  type,
  ...rest
}: TextInputProps) {
  const { colors, fonts } = useTheme();

  return (
    <DefaultTextInput
      style={[
        {
          height: INPUT_SIZES[size],
          paddingLeft: 20,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: hasError ? colors.error : colors.border,
          color: colors.text,
          width: "100%",
          ...fonts.semiBold,
        },
        style,
      ]}
      placeholderTextColor={colors.secondary}
      {...rest}
      value={rest.value || ""}
      onChangeText={text => {
        if (type === "number" && isNaN(Number(text))) return;
        rest.onChangeText?.(text);
      }}
      autoCapitalize="none"
    />
  );
}
