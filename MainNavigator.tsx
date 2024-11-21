import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/stores/store";
import { lightTheme } from "./styles/theme";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./view/authentication/Login";
import LogoTitle from "./components/logo/LogoTitle";
import GetStartedScreen from "./view/launch/GetStarted";
import LoadingManager from "./components/navigation/LoadingManager";
import ToastManager from "./components/navigation/ToastManager";

export type RootStackParamList = {
  GetStarted: undefined;
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  const { isFirstLaunch, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  );
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleLoaded = () => {
    setLoadingCompleted(true);
  };

  if (!loadingCompleted) {
    return <LoadingManager onLoaded={handleLoaded} />;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={lightTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={
                isFirstLaunch ? "GetStarted" : isLoggedIn ? "Home" : "Login"
              }
            >
              <Stack.Screen
                name="GetStarted"
                component={GetStartedScreen}
                options={{
                  headerStyle: { backgroundColor: "#FF914D", height: 150 },
                  headerTitle: () => <LogoTitle />,
                }}
              />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <ToastManager message={toastMessage} />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
