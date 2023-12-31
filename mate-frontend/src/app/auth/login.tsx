import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import BaseView from "@comps/BaseView";
import StyledTextInput from "@comps/StyledTextInput";
import StyledTouchableOpacity from "@comps/StyledTouchableOpacity";

export default function LoginPage() {
  const [username, onChangeUsername] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");
  return (
    <BaseView>
      <KeyboardAvoidingView>
        <StyledTextInput
          onChangeText={onChangeUsername}
          value={username}
          placeholder="username"
          autoComplete="username"
          secureTextEntry={false}
        />
        <StyledTextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="password"
          autoComplete="password"
          secureTextEntry={true}
        />
        <StyledTouchableOpacity
          text="login"
          onPress={() => {
            router.push("/(tabs)/second");
          }}
        />
      </KeyboardAvoidingView>
    </BaseView>
  );
}
