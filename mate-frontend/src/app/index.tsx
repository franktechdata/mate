import BaseView from "@comps/BaseView";
import StyledTouchableOpacity from "@comps/StyledTouchableOpacity";
import { router } from "expo-router";

const Index = () => {
  return (
    <BaseView>
      <StyledTouchableOpacity
        text="enter website"
        onPress={() => {
          router.push("/auth/login");
        }}
      />
    </BaseView>
  );
};

export default Index;
