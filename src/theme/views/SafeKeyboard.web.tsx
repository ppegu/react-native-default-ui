import React from "react";
import type { StyleProp, ViewStyle } from "react-native";

export default function SafeKeyboard({
  children,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return children;
}
