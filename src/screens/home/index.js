import React from "react";
import { View, Button, Image } from "react-native";
import { styles } from "./style";
import { Title } from "../../components";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title title="Home de Tienda" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1200px-Facebook_Home_logo.svg.png",
        }}
        style={styles.image}
      />
      <Button
        title="Ir a Categorias"
        onPress={() => navigation.navigate("Categories")}
      />
    </View>
  );
};

export default Home;
