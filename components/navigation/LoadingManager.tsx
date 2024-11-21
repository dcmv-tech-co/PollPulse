import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { setFirstLaunch } from "../../redux/slices/authSlice";
import { checkFirstLaunch } from "../../helpers/firstLaunchChecker";
import { preloaderStyle } from "../../styles/theme";
import loadFonts from "../../utility/fontLoader";

const LoadingManager = ({ onLoaded }: { onLoaded: () => void }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const handleError = (message: string) => console.error(message);
    const loadResourcesAndData = async () => {
      const firstLaunch = await checkFirstLaunch(handleError);
      dispatch(setFirstLaunch(firstLaunch));
      await loadFonts();
      setFontsLoaded(true);
      setIsLoading(false);
      onLoaded();
    };

    loadResourcesAndData();
  }, [dispatch, onLoaded]);

  if (isLoading || !fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={preloaderStyle.color} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingManager;
