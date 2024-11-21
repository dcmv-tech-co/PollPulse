import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/stores/store";
import MainNavigator from "./MainNavigator";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <MainNavigator />
    </ReduxProvider>
  );
};

export default App;
