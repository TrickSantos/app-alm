import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ToastProvider } from "react-native-toast-notifications";
import { AuthtenticationProvider } from "./contexts/Authentication";
import Routes from "./screens/Routes/index.routes";

const App = () => {
  return (
    <NavigationContainer>
      <ToastProvider>
        <StatusBar backgroundColor="#f2621a" />
        <AuthtenticationProvider>
          <Routes />
        </AuthtenticationProvider>
      </ToastProvider>
    </NavigationContainer>
  );
};

export default App;
