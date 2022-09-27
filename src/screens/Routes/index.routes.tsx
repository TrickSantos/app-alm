import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Login";
import Eventos from "../Eventos";
import Scanner from "../Scanner";
import CheckIn from "../CheckIn";
import Codigo from "../Codigo";

export type RootSackParamList = {
  Login: undefined;
  Eventos: undefined;
  Scanner: undefined;
  Codigo: undefined;
  CheckIn: undefined;
};

const Stack = createNativeStackNavigator<RootSackParamList>();
const { Navigator, Screen } = Stack;

const AuthRoutes = () => {
  return (
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="Eventos"
        component={Eventos}
        options={{ headerShown: false }}
      />
      <Screen
        name="Scanner"
        component={Scanner}
        options={{ headerShown: false }}
      />
      <Screen
        name="Codigo"
        component={Codigo}
        options={{ headerShown: false }}
      />
      <Screen
        name="CheckIn"
        component={CheckIn}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default AuthRoutes;
