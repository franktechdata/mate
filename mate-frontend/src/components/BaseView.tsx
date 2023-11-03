import { SafeAreaView } from "react-native-safe-area-context";
export default ({ children }) => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-slate-900 items-center justify-center">
      {children}
    </SafeAreaView>
  );
};
