import * as Font from "expo-font";

const FontAssets = {
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
  "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
};

const loadFonts = () => {
  return Font.loadAsync(FontAssets);
};

export default loadFonts;
