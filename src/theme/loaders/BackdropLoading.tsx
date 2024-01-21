import React from "react";
import type { ActivityIndicatorProps } from "react-native";
import { ActivityIndicator } from "react-native";
import { ABSOLUTE_STYLE } from "../responsive";
import { Center } from "../views/View";

export interface BackdropLoadingProps extends ActivityIndicatorProps {
  loading: boolean;
}

export default function BackdropLoading({
  loading,
  ...rest
}: BackdropLoadingProps) {
  if (!loading) return <></>;

  return (
    <Center {...ABSOLUTE_STYLE}>
      <ActivityIndicator {...rest} />
    </Center>
  );
}
