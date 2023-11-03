import { TextInput } from "react-native";

export default ({
  onChangeText,
  value,
  placeholder,
  autoComplete,
  secureTextEntry,
}) => {
  return (
    <TextInput
      className="bg-slate-100 bg-opacity-50 border-2 border-slate-500 rounded-lg p-2 text-lg"
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      secureTextEntry={secureTextEntry}
    />
  );
};
