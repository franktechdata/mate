import { TouchableOpacity, Text } from "react-native";

export default function StyledButton({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-slate-700 active:bg-slate-600 dark:bg-slate-200 dark:active:bg-slate-300 px-4 py-2 rounded-md"
    >
      <Text className="text-white dark:text-slate-800 text-center font-semibold">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
