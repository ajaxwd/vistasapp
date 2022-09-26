import { View, Button, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { CardButton } from "../../components/card-button";
import { Title } from "../../components";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title title="Categoria de Productos" />
      <Image
        source={{
          uri: "https://marketing4ecommerce.mx/wp-content/uploads/2016/07/CategoriaOk.jpg",
        }}
        style={styles.image}
      />
      <CardButton>
        <Button
          title="Ir a Productos"
          onPress={() => navigation.navigate("Products")}
        />
        <Button
          title="Ir al Home"
          onPress={() => navigation.navigate("Home")}
        />
      </CardButton>
    </View>
  );
};

export default Categories;
