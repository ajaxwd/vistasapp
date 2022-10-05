import React from "react";
import { isAndroid } from "../utils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Orders } from "../screens";
import { colors } from "../constants/themes";

const Stack = createBottomTabNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgoundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
        },
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
