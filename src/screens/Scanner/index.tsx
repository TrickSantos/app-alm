import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Constants } from "expo-barcode-scanner";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import {
  BarCodeScanningResult,
  Camera,
  requestCameraPermissionsAsync,
} from "expo-camera";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "../Routes/app.routes";
import { useAuth } from "../../contexts/Authentication";

type Props = NativeStackScreenProps<AppStackParamsList, "Scanner">;

const Scanner = ({ navigation, route: { params } }: Props) => {
  const { socket } = useAuth();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const onBarCodeScanned = (res: BarCodeScanningResult) => {
    console.log("escaneado");
    console.log(res.data);
    socket.emit("usuario:find", res.data, (res: any) => {
      if (res.status === "error") {
        navigation.popToTop();
      } else {
        navigation.navigate("CheckIn", {
          eventoId: params.id,
          clubeId: res.clubeId,
          usuarioId: res.id,
        });
      }
    });
  };

  const TypeCode = () =>
    navigation.navigate("Codigo", {
      eventoId: params.id,
    });

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
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
