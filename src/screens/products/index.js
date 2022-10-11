import React, { useEffect } from "react";
import { View, Text, Button, Image, FlatList } from "react-native";
import { styles } from "./style";
import { CardButton, ProductItem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { filteredProducts, selectedProduct } from "../../store/actions";

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.selected);

  const productsFiltered = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id));
  }, []);

  const onSelected = (item) => {
    console.log(item);
    dispatch(selectedProduct(item.id));
    navigation.navigate("Product", { name: item.title });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos de la Store</Text>
      <Image
        source={{
          uri: "https://img.freepik.com/vector-premium/productos-alimenticios-productos-cocina-envasados-productos-supermercado-comida-enlatada-tarro-galletas-crema-batida-huevos-paquete-iconos-flat_102902-848.jpg?w=2000",
        }}
        style={styles.image}
      />
      <FlatList
        data={productsFiltered}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <CardButton>
        <Button
          title="Ir al Home"
          onPress={() => navigation.navigate("Home")}
        />
      </CardButton>
    </View>
  );
};

export default Products;
