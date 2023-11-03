import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  return (
    <SafeAreaView className="flex justify-center items-center h-screen">
      <TouchableOpacity
        onPress={() => {
          router.push("/(tabs)");
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
