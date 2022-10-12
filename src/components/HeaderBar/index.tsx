import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerBar}>
      <TouchableOpacity onPress={navigation.goBack}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
