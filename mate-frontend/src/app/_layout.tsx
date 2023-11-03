// app/_layout.tsx
import { SplashScreen, Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { ThemeProvider } from "@/theme/ThemeProvider";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth/login" />
      </Stack>
    </ThemeProvider>
  );
}
