import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./style";
import { addToCart } from "../../store/actions";

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);
  console.log(product);
  const addCartItem = () => {
    dispatch(addToCart(product));
  };

  const { id, title, description, price } = product || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Producto seleccionado</Text>
      <Image
        source={{
          uri: "https://enciclopediaeconomica.com/wp-content/uploads/2021/10/icono-producto.jpg",
        }}
        style={styles.image}
      />
      <Text>id: {id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>${price}</Text>
      <Button title="Add to cart" onPress={addCartItem} />
      <Button title="Ir al Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Product;
