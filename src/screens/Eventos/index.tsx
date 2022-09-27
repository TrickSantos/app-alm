import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Logo from "../../../assets/images/logo.png";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import S from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootSackParamList } from "../Routes/index.routes";

const data = [
  { id: "aushduahsdsa", evento: "Evento 1", status: true },
  { id: "çlzxkahsdssaa", evento: "Evento 2", status: true },
  { id: "açalsopzixcz", evento: "Evento 3", status: false },
  { id: "pzoxiczzxxxa", evento: "Evento 4", status: true },
];

type Props = NativeStackScreenProps<RootSackParamList, "Eventos">;
const Item = ({ item, onPress }: any) => {
  return (
    <TouchableOpacity style={S.item} onPress={onPress}>
      <Text style={S.itemText}>{item.evento}</Text>
      {item.status ? (
        <AntDesign name="right" size={24} color="#CCCCCC" />
      ) : (
        <FontAwesome5 name="lock" size={24} color="#CCCCCC" />
      )}
    </TouchableOpacity>
  );
};

const Eventos = ({ navigation }: Props) => {
  const renderItem = ({ item }: any) => {
    return <Item item={item} onPress={() => navigation.navigate("Scanner")} />;
  };

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
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default Eventos;
