import React from "react";
import { StatusBar as DefaultStatusbar } from "react-native";

export default function StatusBar() {
  return (
    <DefaultStatusbar
      translucent
      backgroundColor="transparent"
      barStyle="light-content"
    />
  );
}
