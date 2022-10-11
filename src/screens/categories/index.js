import React from "react";
import { View, Button, Image, FlatList } from "react-native";
import { styles } from "./style";
import { CardButton, CategoryItem, Title } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", { name: item.title });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <Title title="Categoria de Productos" />
      <Image
        source={{
          uri: "https://marketing4ecommerce.mx/wp-content/uploads/2016/07/CategoriaOk.jpg",
        }}
        style={styles.image}
      />
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.containerList}
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

export default Categories;
