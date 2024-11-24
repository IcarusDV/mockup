import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import ProfilePhoto from "../../assets/profile.png";
import { themas } from "../../global/themes";
import { useNavigation } from "@react-navigation/native";

export default function ProfileEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigation();

  return (
    <View style={style.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigate.navigate("Profile")}>
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={style.title}>Editar Perfil</Text>
        <View style={style.imageContainer}>
          <View style={{ position: "relative" }}>
            <Image style={style.profilePhoto} source={ProfilePhoto} />
            <TouchableOpacity style={style.profilePhotoEditButton}>
              <Feather name="edit-2" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.inputContainer}>
          <Text style={style.label}>Nome</Text>
          <TextInput
            style={style.input}
            placeholder="Digite seu nome"
            placeholderTextColor={themas.colors.low_opacity_white}
            value={name}
            onChangeText={setName}
          />

          <Text style={style.label}>Endereço de E-Mail</Text>
          <TextInput
            style={style.input}
            placeholder="Digite seu E-Mail"
            placeholderTextColor={themas.colors.low_opacity_white}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={style.label}>Número de Contato</Text>
          <TextInput
            style={style.input}
            placeholder="Digite seu telefone"
            placeholderTextColor={themas.colors.low_opacity_white}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <Text style={style.label}>Nova Senha</Text>
          <TextInput
            style={style.input}
            placeholder="Digite sua nova senha"
            placeholderTextColor={themas.colors.low_opacity_white}
            value={newPassword}
            secureTextEntry
            onChangeText={setNewPassword}
          />

          <TouchableOpacity style={style.saveButton}>
            <Text style={style.saveButtonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
