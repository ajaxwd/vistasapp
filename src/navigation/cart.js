import React from "react";
import { isAndroid } from "../utils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart } from "../screens";
import { colors } from "../constants/themes";

const Stack = createBottomTabNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
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
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
