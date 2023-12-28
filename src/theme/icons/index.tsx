import React from "react";
import FontAwesome6, {
  default as DefaultIcon,
  type FontAwesome6IconProps,
} from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import useTheme from "../useTheme";

type IconProps = FontAwesome6IconProps;

export function Icon({ ...rest }: IconProps) {
  const { colors } = useTheme();

  return <DefaultIcon color={colors.text} {...rest} />;
}

export function FontAwesome({ ...rest }: FontAwesome6IconProps) {
  const { colors } = useTheme();

  return <FontAwesome6 color={colors.text} {...rest} />;
}

export function BottomtabIcon({ ...rest }: IconProps) {
  const { colors } = useTheme();
  return <Icon color={colors.text} {...rest} size={18} />;
}

export function MaterialIcon({ ...rest }: IconProps) {
  const { colors } = useTheme();

  return <MaterialIcons color={colors.text} {...rest} />;
}
