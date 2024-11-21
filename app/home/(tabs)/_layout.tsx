import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "my Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "my Shop",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cart-arrow-down" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: "add to cart",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-circle" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
