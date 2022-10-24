import React, { useState } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./style";
import { addToCart } from "../../store/actions";
import { ImageSelector } from "../../components";

const Product = ({ navigation }) => {
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const addCartItem = () => {
    dispatch(addToCart(product));
  };

  const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
  };

  const { id, title, description, price } = product || {};

  return (
    <ScrollView>
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
        <Button
          title="Ir al Home"
          onPress={() => navigation.navigate("Home")}
        />
        <ImageSelector onImage={onHandleImageSelect} />
      </View>
    </ScrollView>
  );
};

export default Product;
