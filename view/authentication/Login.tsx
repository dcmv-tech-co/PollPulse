import React from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../MainNavigator";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>This is Login page</Text>
    </View>
  );
};

export default LoginScreen;
