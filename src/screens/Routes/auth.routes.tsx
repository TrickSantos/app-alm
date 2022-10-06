import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Login";
import AppRoutes from "./app.routes";

export type AuthStackParamList = {
  Login: undefined;
  App: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="App"
        component={AppRoutes}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
