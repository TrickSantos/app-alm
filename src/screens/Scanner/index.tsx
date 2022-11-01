import { View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Constants } from "expo-barcode-scanner";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { BarCodeScanningResult, Camera } from "expo-camera";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "../Routes/app.routes";
import { useAuth } from "../../contexts/Authentication";
import HeaderBar from "../../components/HeaderBar";
import { useToast } from "react-native-toast-notifications";
import { Evento } from "../../types";

type Props = NativeStackScreenProps<AppStackParamsList, "Scanner">;

const Scanner = ({ navigation, route: { params } }: Props) => {
  const { socket } = useAuth();
  const toast = useToast();

  const onBarCodeScanned = (res: BarCodeScanningResult) => {
    console.log("escaneado");
    socket.emit("usuario:find", res.data, (res: any) => {
      if (res.status === "error") {
        res.message.forEach((msg: string) =>
          toast.show(msg, {
            type: "danger",
          })
        );
        navigation.goBack();
      } else {
        navigation.navigate("CheckIn", {
          eventoId: params.id,
          clubeId: res.clubeId,
          usuario: res,
        });
      }
    });
  };

  const TypeCode = () =>
    navigation.navigate("Codigo", {
      eventoId: params.id,
    });

  useEffect(() => {
    socket.emit("evento:find", params.id, (res: Evento) => {
      if (!res.ativo) {
        navigation.popToTop();
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <HeaderBar />
      <View style={styles.main}>
        <View style={styles.camera}>
          <Camera
            onBarCodeScanned={onBarCodeScanned}
            barCodeScannerSettings={{
              barCodeTypes: [Constants.BarCodeType.qr],
            }}
          />
        </View>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={TypeCode}>
          <AntDesign name="scan1" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Scanner;
