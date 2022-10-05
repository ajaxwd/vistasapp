import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product, Home } from "../screens";
import { isAndroid } from "../utils";
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Categoria",
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          title: "Product",
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
