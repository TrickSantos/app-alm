import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./screens/Routes/index.routes";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f2621a" />
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default App;
