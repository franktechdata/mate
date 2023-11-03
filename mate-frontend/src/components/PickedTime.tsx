import { View, Text } from "react-native";

export default () => {
  return (
    <View className="flex flex-row items-center justify-center bg-slate-200 dark:bg-slate-600 p-4 rounded-lg m-2">
      <Text className="text-slate-800 dark:text-slate-100 mx-2">Text 1</Text>
      <Text className="text-slate-800 dark:text-slate-100 mx-2">Text 2</Text>
      <Text className="text-slate-800 dark:text-slate-100 mx-2">Text 3</Text>
    </View>
  );
};
