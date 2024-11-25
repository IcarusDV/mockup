import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { themas } from "../../global/themes";
import Logo from "../../assets/logo.png";
import { style } from "./style";
import useServer from "../../hooks/useServer";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const EditOrigin = () => {
  const { origin, setOrigin } = useServer();

  const navigation = useNavigation();
  const handleLogin = () => {};

  return (
    <View style={style.container}>
      <View style={style.topBox}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.title}>Acesso ao Servidor</Text>
      </View>

      <View style={style.inputContainer}>
        <Text style={style.label}>Origem</Text>
        <TextInput
          style={style.input}
          placeholder="http://exemplo:3000"
          placeholderTextColor={themas.colors.low_opacity_white}
          value={origin}
          onChangeText={setOrigin}
        />
      </View>

      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          position: "absolute",
          top: 48,
          left: 32,
        }}
      >
        <Ionicons name="arrow-back" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default EditOrigin;
