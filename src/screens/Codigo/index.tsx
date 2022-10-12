import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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

type Props = NativeStackScreenProps<AppStackParamsList, "Codigo">;
const CELL_COUNT = 7;

const Codigo = ({ navigation, route: { params } }: Props) => {
  const { socket } = useAuth();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onConfirm = () => {
    socket.emit("usuario:find", value, (res: any) => {
      if (res.status === "error") {
        navigation.popToTop();
      } else {
        navigation.navigate("CheckIn", {
          eventoId: params.eventoId,
          clubeId: res.clubeId,
          usuario: res,
        });
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
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
