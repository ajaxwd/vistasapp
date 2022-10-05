import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./CartItem.styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/themes";

export function CartItem({ item, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
