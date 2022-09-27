import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import S from "./styles";
import { RootSackParamList } from "../Routes/index.routes";

type Props = NativeStackScreenProps<RootSackParamList, "CheckIn">;

const CheckIn = ({ navigation }: Props) => {
  const onConfirm = () => navigation.popToTop();

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
