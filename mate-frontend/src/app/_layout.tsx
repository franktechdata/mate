import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { Provider, useSelector } from "react-redux";
import store, { useAppDispatch } from "@store";
import { loading, loaded, selectIsLoading } from "@store/appSlice";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loading());
    console.log(isLoading);
    //there's nothing yet,  dispatch `loaded` right away.
    dispatch(loaded());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      console.log(isLoading);
      console.log("Hello");
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="auth/login" />
    </Stack>
  );
};

export default function Layout() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
