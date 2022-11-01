import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "./styles";
import { AppStackParamsList } from "../Routes/app.routes";
import { useAuth } from "../../contexts/Authentication";
import HeaderBar from "../../components/HeaderBar";
import { useToast } from "react-native-toast-notifications";

type Props = NativeStackScreenProps<AppStackParamsList, "Codigo">;
const CELL_COUNT = 7;

const Codigo = ({ navigation, route: { params } }: Props) => {
  const { socket } = useAuth();
  const toast = useToast();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onConfirm = () => {
    socket.emit("usuario:find", value, (res: any) => {
      if (res.status === "error") {
        res.message.forEach((msg: string) =>
          toast.show(msg, {
            type: "danger",
          })
        );
        navigation.goBack();
      } else {
        navigation.replace("CheckIn", {
          eventoId: params.eventoId,
          clubeId: res.clubeId,
          usuario: res,
        });
      }
    });
  };

  const backActionHandler = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backActionHandler);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <Text style={styles.title}>Digite o código</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused && <Cursor />)}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={onConfirm}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Codigo;
