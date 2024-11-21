import AsyncStorage from "@react-native-async-storage/async-storage";
const FIRST_LAUNCH_KEY = "first_launch";
const SIGN_UP_KEY = "signup";

export const checkFirstLaunch = async (onError: (message: string) => void) => {
  try {
    // If first time launch of application, force the user to sign up.
    const hasLaunched = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);
    if (hasLaunched === null) {
      await AsyncStorage.setItem(FIRST_LAUNCH_KEY, "true");
      await AsyncStorage.setItem(SIGN_UP_KEY, "false");
      return true;
    }

    // If the user hasn't sign up yet, redirect them to the sign up page.
    const hasSignedUp = await AsyncStorage.getItem(SIGN_UP_KEY);
    if (hasSignedUp === "false") {
      return true;
    }

    return false;
  } catch (error) {
    if (error instanceof Error) {
      // Call the onError callback
      onError(
        "An error occured while checking the first launch of application."
      );
    } else {
      onError("An unexpected error occurred. Please try again.");
    }

    return false;
  }
};
