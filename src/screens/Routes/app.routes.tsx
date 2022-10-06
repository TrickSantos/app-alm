import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Eventos from "../Eventos";
import Scanner from "../Scanner";
import CheckIn from "../CheckIn";
import Codigo from "../Codigo";
import { Evento } from "../../types";

export type AppStackParamsList = {
  Eventos: undefined;
  Scanner: Evento;
  Codigo: {
    eventoId: number;
  };
  CheckIn: {
    eventoId: number;
    clubeId: number;
    usuarioId: number;
  };
};

const AppStack = createNativeStackNavigator<AppStackParamsList>();
const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Eventos"
      component={Eventos}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Scanner"
      component={Scanner}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Codigo"
      component={Codigo}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="CheckIn"
      component={CheckIn}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);
export default AppRoutes;
