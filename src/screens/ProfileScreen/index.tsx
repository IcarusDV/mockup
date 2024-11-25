import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { themas } from "../../global/themes";
import { style } from "./style";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ProfilePhoto from "../../assets/profile.png";
import { useNavigation } from "@react-navigation/native";
import TabBar from "../../components/TabBar";
import useEndpointAction from "../../hooks/useEndpointAction";
import useAuth from "../../hooks/useAuth";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [user, setUser] = useState(null);
  const { logout } = useAuth();

  const getUserAction = useEndpointAction("GET", "/api/users/user");
  const navigate = useNavigation();

  function handleLogout() {
    logout();
    navigate.navigate("Login");
  }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await getUserAction();

        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  return (
    <>
      <LinearGradient
        colors={[themas.colors.primary, themas.colors.secondaryPurple, "white"]}
        style={style.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.2, 0.4]}
      >
        <View style={style.editButtonContainer}>
          <TouchableOpacity
            style={style.editButton}
            onPress={() => navigate.navigate("ProfileEdit")}
          >
            <FontAwesome name="edit" size={24} color="white" />
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Editar Perfil
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.bottonContainer}>
          <View style={style.imageContainer}>
            <Image
              style={style.profilePhoto}
              source={user?.profilePicture || ProfilePhoto}
            />
          </View>

          <View style={style.inputContainer}>
            <Text style={style.label}>Nome</Text>
            <TextInput
              style={style.input}
              placeholder="Digite seu nome"
              placeholderTextColor={themas.colors.low_opacity_white}
              value={user?.username || ""}
              onChangeText={setName}
              editable={false}
            />

            <Text style={style.label}>E-Mail</Text>
            <TextInput
              style={style.input}
              placeholder="Digite seu E-Mail"
              placeholderTextColor={themas.colors.low_opacity_white}
              value={user?.email || ""}
              onChangeText={setEmail}
              editable={false}
            />

            <Text style={style.label}>Número de Contato</Text>
            <TextInput
              style={style.input}
              placeholder="Digite seu Número"
              placeholderTextColor={themas.colors.low_opacity_white}
              value={user?.phone || ""}
              onChangeText={setPhoneNumber}
              editable={false}
            />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
                marginTop: 40,
              }}
            >
              <TouchableOpacity
                onPress={() => navigate.navigate("DeleteAccount")}
                style={style.deleteButton}
              >
                <Text style={style.deleteButtonText}>Deletar Conta</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleLogout} style={style.exitButton}>
                <Text style={style.exitButtonText}>Sair</Text>
                <MaterialCommunityIcons
                  name="exit-to-app"
                  size={28}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
      <TabBar currentRoute="USER" />
    </>
  );
}
