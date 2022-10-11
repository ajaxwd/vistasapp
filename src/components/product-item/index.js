import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
