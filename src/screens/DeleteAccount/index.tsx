import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { style } from "./style";
import { useNavigation } from "@react-navigation/native";
import { themas } from "../../global/themes";

export default function DeleteAccount() {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");

  return (
    <View style={style.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={style.title}>Deletar Conta</Text>
        <Text style={{ textAlign: "center", fontSize: 128 }}>😢</Text>

        <Text
          style={{
            color: themas.colors.lightgray,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Tem certeza de que deseja deletar sua conta? Essa ação é irreversível
          e resultará na exclusão de todos os seus dados.
        </Text>

        <Text style={style.label}>Senha</Text>
        <TextInput
          style={style.input}
          placeholder="Digite sua senha"
          placeholderTextColor={themas.colors.low_opacity_white}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View>
          <TouchableOpacity style={style.deleteButton}>
            <Text style={{ color: "white", fontSize: 14 }}>Deletar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
