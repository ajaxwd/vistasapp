import React from "react";
import { View } from "react-native";
import { styles } from "./style";

export const CardButton = ({ children, style }) => {
  return <View style={{ ...styles.containerBtn, ...style }}>{children}</View>;
};
