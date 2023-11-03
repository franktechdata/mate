import { router } from "expo-router";
import BaseView from "@/components/BaseView";
import StyledTouchableOpacity from "@/components/StyledTouchableOpacity";

const HomeScreen = () => {
  return (
    <BaseView>
      <StyledTouchableOpacity
        text="Login"
        onPress={() => {
          router.push("/auth/login");
        }}
      />
    </BaseView>
  );
};

export default HomeScreen;
