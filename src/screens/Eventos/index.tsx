import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import Logo from "../../../assets/images/logo.png";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "../Routes/app.routes";
import { useAuth } from "../../contexts/Authentication";
import { Evento } from "../../types";
import { useToast } from "react-native-toast-notifications";

type Props = NativeStackScreenProps<AppStackParamsList, "Eventos">;
const Item = ({ item, onPress }: any) => {
  const toast = useToast();

  return (
    <TouchableOpacity
      style={S.item}
      onPress={() => {
        item.ativo ? onPress() : toast.show("Evento não liberado");
      }}
    >
      <Text style={S.itemText}>{item.nome}</Text>
      {item.ativo ? (
        <AntDesign name="right" size={24} color="#CCCCCC" />
      ) : (
        <FontAwesome5 name="lock" size={24} color="#CCCCCC" />
      )}
    </TouchableOpacity>
  );
};

const Eventos = ({ navigation }: Props) => {
  const { socket } = useAuth();
  const [eventos, setEventos] = useState<Evento[]>([]);

  const renderItem: ListRenderItem<Evento> = ({ item }) => (
    <Item item={item} onPress={() => navigation.navigate("Scanner", item)} />
  );

  useEffect(() => {
    socket.emit("evento:index", (res: Evento[]) => setEventos(res));
    socket.on("evento:created", () => {
      socket.emit("evento:index", (res: Evento[]) => setEventos(res));
    });
    socket.on("evento:destroyed", () =>
      socket.emit("evento:index", (res: Evento[]) => setEventos(res))
    );
    socket.on("evento:updated", () => {
      socket.emit("evento:index", (res: Evento[]) => setEventos(res));
    });
  }, []);

  return (
    <View style={S.container}>
      <LinearGradient
        style={S.container}
        colors={["#f2621a", "#f2621b", "#f3621a", "#000000"]}
      >
        <ImageBackground style={S.imageBg} source={Logo}>
          <View style={S.title}>
            <Text style={S.titleText}>Check-In</Text>
          </View>
          <View style={S.main}>
            <FlatList
              data={eventos}
              renderItem={renderItem}
              keyExtractor={(evento) => evento.id.toString()}
            />
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default Eventos;
