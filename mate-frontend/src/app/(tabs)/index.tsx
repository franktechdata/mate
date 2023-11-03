import { Text, TouchableOpacity, View } from "react-native";
import Hello from "@/components/Hello";
import { router } from "expo-router";

export default function Page() {
  return (
    <View className="flex bg-red-400 items-center justify-center h-screen">
      <View className="max-w-2xl p-8 bg-white rounded-lg shadow">
        <Hello />
        <Text className="text-3xl text-gray-700">
          This is the first page of your app.
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/auth/login");
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
