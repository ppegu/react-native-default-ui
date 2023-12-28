import React from "react";
import { Pressable } from "react-native";
import { View, type ViewProps } from "src/theme/views/View";
import useTheme from "../useTheme";
import BlurView from "../views/BlurView";

export type BottomModalProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & ViewProps;

export default function BottomModal({
  children,
  open,
  setOpen,
  ...rest
}: BottomModalProps) {
  const { colors } = useTheme();

  if (!open) return <></>;

  return (
    <BlurView>
      <Pressable
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        onPress={() => setOpen?.(false)}
      ></Pressable>
      <View
        backgroundColor={colors.background2}
        padding={10}
        paddingTop={15}
        borderTopLeftRadius={15}
        borderTopRightRadius={15}
        zIndex={10}
        {...rest}
      >
        {children}
      </View>
    </BlurView>
  );
}
