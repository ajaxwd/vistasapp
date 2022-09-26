import { View, Text } from "react-native";
import React from "react";
import { styles } from "../card-button/style";

export function Title({ title }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
