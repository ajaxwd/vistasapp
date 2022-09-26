import { View, Text, Button, Image } from "react-native";
import React from "react";
import { styles } from "./style";

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Producto seleccionado</Text>
      <Image
        source={{
          uri: "https://enciclopediaeconomica.com/wp-content/uploads/2021/10/icono-producto.jpg",
        }}
        style={styles.image}
      />
      <Button title="Ir al Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Product;
