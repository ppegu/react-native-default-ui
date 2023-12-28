import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  type StyleProp,
  type ViewStyle,
} from "react-native";

export default function SafeKeyboard({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[{ flex: 1, paddingTop: 20 }]}
    >
      <Pressable style={[{ flex: 1 }, style]} onPress={Keyboard.dismiss}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
}
