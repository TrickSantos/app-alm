import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import S from "./style";

interface Props extends TextInputProps {
  iconPrefix?: React.ReactNode;
  iconSuffix?: React.ReactNode;
}

const Input = (props: Props) => {
  return (
    <View style={S.container}>
      {props.iconPrefix && props.iconPrefix}
      <TextInput style={S.input} {...props} />
      {props.iconSuffix && props.iconSuffix}
    </View>
  );
};

export default Input;
