import { View } from "react-native";
import { useColorScheme } from "nativewind";
import BaseView from "@/components/BaseView";
import StyledTouchableOpacity from "@/components/StyledTouchableOpacity";

const SettingScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <BaseView>
      <View className="max-w-2xl">
        <StyledTouchableOpacity
          text="color scheme"
          onPress={toggleColorScheme}
        />
      </View>
    </BaseView>
  );
};

export default SettingScreen;
