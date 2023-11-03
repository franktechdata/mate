import { Tabs } from "expo-router/tabs";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="first"
        options={{ tabBarLabel: "Home", title: "Home" }}
      />
      <Tabs.Screen
        name="second"
        options={{ tabBarLabel: "New Event", title: "New Event" }}
      />
      <Tabs.Screen
        name="third"
        options={{ tabBarLabel: "Setting", title: "Setting" }}
      />
    </Tabs>
  );
}
