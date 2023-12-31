import { router } from "expo-router";
import BaseView from "@comps/BaseView";
import StyledTouchableOpacity from "@comps/StyledTouchableOpacity";

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
