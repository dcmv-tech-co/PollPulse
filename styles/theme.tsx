import { ColorValue, StyleSheet } from "react-native";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    primary: "#3489eb",
    secondary: "teal",
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {},
  },
};

const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    primary: "#3489eb",
    secondary: "teal",
  },
};

const customStyles = StyleSheet.create({
  Regular17: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
  },
  Regular20: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
  },
  Regular30: {
    fontFamily: "Roboto-Regular",
    fontSize: 30,
  },
  Light17: {
    fontFamily: "Roboto-Light",
    fontSize: 17,
  },
  Light20: {
    fontFamily: "Roboto-Light",
    fontSize: 20,
  },
  Light30: {
    fontFamily: "Roboto-Light",
    fontSize: 30,
  },
  Medium17: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
  },
  Medium20: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
  },
  Medium30: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  Bold17: {
    fontFamily: "Roboto-Bold",
    fontSize: 17,
  },
  Bold20: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
  },
  Bold30: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
  },
});

const preloaderStyle = {
  color: "#FF914D" as ColorValue,
};

export { lightTheme, darkTheme, customStyles, preloaderStyle };
