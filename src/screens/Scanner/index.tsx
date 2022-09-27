import { View, Text, Button, TouchableOpacity } from "react-native";
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
import { RootSackParamList } from "../Routes/index.routes";

type Props = NativeStackScreenProps<RootSackParamList, "Scanner">;

const Scanner = ({ navigation }: Props) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const onBarCodeScanned = (res: BarCodeScanningResult) => {
    console.log("escaneado");
    console.log(res.data);
    navigation.navigate("CheckIn");
  };

  const TypeCode = () => navigation.navigate("Codigo");

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
