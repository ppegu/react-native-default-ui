import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../texts/Text";
import { Center, View } from "../views/View";
import { ABSOLUTE_STYLE } from "../responsive";

export default function DualtoneButton({
  width,
  height,
  colors,
  children,
  onPress,
  disabled,
}: {
  width: number;
  height: number;
  colors: string[];
  children?: any;
  onPress?: any;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity onPress={disabled ? () => {} : onPress}>
      <View
        height={0}
        width={0}
        borderStyle="solid"
        borderTopColor={colors[0]}
        borderRightWidth={width}
        borderRightColor={colors[1]}
        borderTopWidth={height}
        borderRadius={10}
      />
      <Center {...ABSOLUTE_STYLE}>
        <Text>{children}</Text>
      </Center>
      {disabled && (
        <View
          {...ABSOLUTE_STYLE}
          backgroundColor="grey"
          opacity={0.85}
          borderRadius={10}
        ></View>
      )}
    </TouchableOpacity>
  );
}
