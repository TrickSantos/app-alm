import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { AppStackParamsList } from "../Routes/app.routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import S from "./styles";
import { useAuth } from "../../contexts/Authentication";

type Props = NativeStackScreenProps<AppStackParamsList, "CheckIn">;

const CheckIn = ({ navigation, route: { params } }: Props) => {
  const { socket } = useAuth();

  const onConfirm = () => {
    socket.emit("presenca:create", params, (res: any) => {
      if (res.status === "error") {
        navigation.popToTop();
      } else {
        navigation.popToTop();
      }
    });
  };

  return (
    <View style={S.container}>
      <View style={S.main}>
        <View style={S.card}>
          <AntDesign name="checkcircleo" size={60} color="#FFFFFF" />
          <Text style={S.cardText}>Check-In</Text>
          <Text style={S.cardText}>Confirmado</Text>
        </View>
        <View style={S.buttonContainer}>
          <TouchableOpacity style={S.button} onPress={onConfirm}>
            <Text style={S.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckIn;
