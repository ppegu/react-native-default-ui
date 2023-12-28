import React from "react";
import { Center } from "../views/View";
import { ABSOLUTE_STYLE } from "../responsive";
import { ActivityIndicator } from "react-native";

export default function BackdropLoading({ loading }: { loading: boolean }) {
  if (!loading) return <></>;

  return (
    <Center {...ABSOLUTE_STYLE}>
      <ActivityIndicator />
    </Center>
  );
}
