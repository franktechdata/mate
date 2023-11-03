import { Text, View, Button } from "react-native";
import Hello from "@/components/Hello";
import { useTheme } from "@/theme/ThemeProvider";

export default function Page() {
  const { defaultClassName, theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <View
      className={`${defaultClassName} flex items-center justify-center h-screen`}
    >
      <View className="max-w-2xl p-8 rounded-lg shadow">
        <Hello />
        <Text className="text-3xl">This is the first page of your app.</Text>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </View>
    </View>
  );
}
