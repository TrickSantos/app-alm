import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import S from "./styles";
import Logo from "../../../assets/images/logo.png";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../Routes/auth.routes";
import { useAuth } from "../../contexts/Authentication";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
  const { login } = useAuth();

  const onLogin = async () => {
    await login("patrick.tafa@gmail.com", "trick123");
  };

  return (
    <View style={S.container}>
      <LinearGradient
        style={S.container}
        colors={["#f2621a", "#f2621b", "#f3621a", "#000000"]}
      >
        <ImageBackground style={S.imageBg} source={Logo}>
          <View style={S.mainForm}>
            <Input
              iconPrefix={
                <FontAwesome5 name="user-alt" size={18} color="#CCCCCC" />
              }
              value="email"
            />
            <Input
              value="email"
              secureTextEntry
              iconPrefix={
                <FontAwesome5 name="lock" size={18} color="#CCCCCC" />
              }
              iconSuffix={
                <Ionicons name="ios-eye-sharp" size={18} color="#CCCCCC" />
              }
            />
            <TouchableOpacity style={S.button} onPress={onLogin}>
              <Text style={S.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default Login;
