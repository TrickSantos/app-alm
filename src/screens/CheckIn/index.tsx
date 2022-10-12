import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { AppStackParamsList } from "../Routes/app.routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import S from "./styles";
import { useAuth } from "../../contexts/Authentication";
import HeaderBar from "../../components/HeaderBar";
import { useToast } from "react-native-toast-notifications";

type Props = NativeStackScreenProps<AppStackParamsList, "CheckIn">;

const CheckIn = ({
  navigation,
  route: {
    params: { clubeId, eventoId, usuario },
  },
}: Props) => {
  const { socket } = useAuth();
  const toast = useToast();

  const onConfirm = () => {
    socket.emit(
      "presenca:create",
      {
        clubeId,
        eventoId,
        usuarioId: usuario.id,
      },
      (res: any) => {
        if (res.status === "error") {
          toast.show("Erro ao confirmar presença", { type: "danger" });
          navigation.popToTop();
        } else {
          toast.show("Erro ao confirmar presença", { type: "sucess" });
          navigation.popToTop();
        }
      }
    );
  };

  return (
    <View style={S.container}>
      <HeaderBar />
      <View style={S.main}>
        <View style={S.card}>
          <AntDesign name="checkcircleo" size={60} color="#FFFFFF" />
          <Text style={S.cardText}>Check-In</Text>
          <Text style={S.cardText}>Confirmado</Text>
        </View>
        <View style={S.buttonContainer}>
          <Text style={S.nameText}>{usuario.nome}</Text>
          <Text style={S.nameText}>{usuario.clube.nome}</Text>
          <TouchableOpacity style={S.button} onPress={onConfirm}>
            <Text style={S.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckIn;
