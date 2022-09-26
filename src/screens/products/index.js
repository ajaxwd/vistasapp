import { View, Text, Button, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { CardButton } from "../../components/card-button";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>index</Text>
      <Image
        source={{
          uri: "https://img.freepik.com/vector-premium/productos-alimenticios-productos-cocina-envasados-productos-supermercado-comida-enlatada-tarro-galletas-crema-batida-huevos-paquete-iconos-flat_102902-848.jpg?w=2000",
        }}
        style={styles.image}
      />
      <CardButton>
        <Button
          title="Ir a Producto"
          onPress={() => navigation.navigate("Product")}
        />
        <Button
          title="Ir al Home"
          onPress={() => navigation.navigate("Home")}
        />
      </CardButton>
    </View>
  );
};

export default Products;
