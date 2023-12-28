import React from "react";
import { View, type ViewProps } from "src/theme/views/View";
import { ABSOLUTE_STYLE } from "../responsive";

export type BlurViewProps = {
  children: React.ReactNode;
} & ViewProps;

export default function BlurView({ children, ...rest }: BlurViewProps) {
  return (
    <View
      backgroundColor="transparent"
      {...ABSOLUTE_STYLE}
      zIndex={10}
      {...rest}
    >
      <View backgroundColor="grey" {...ABSOLUTE_STYLE} opacity={0.4}></View>

      <View justifyContent="flex-end" flex={1}>
        {children}
      </View>
    </View>
  );
}
