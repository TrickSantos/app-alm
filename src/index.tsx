import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AuthtenticationProvider } from "./contexts/Authentication";
import Routes from "./screens/Routes/index.routes";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f2621a" />
      <AuthtenticationProvider>
        <Routes />
      </AuthtenticationProvider>
    </NavigationContainer>
  );
};

export default App;
