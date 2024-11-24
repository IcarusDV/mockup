import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { themas } from "../../global/themes";
import { style } from "./style";
import Logo from "../../assets/logo.png";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = () => {
    Alert.alert("Conta criada com sucesso!");
  };

  return (
    <View style={style.container}>
      <View style={style.topBox}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.title}>Faça sua conta!</Text>
      </View>

      <View style={style.inputContainer}>
        <Text style={style.label}>E-mail</Text>
        <TextInput
          style={style.input}
          placeholder="E-mail"
          placeholderTextColor={themas.colors.low_opacity_white}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={style.label}>Senha</Text>
        <TextInput
          style={style.input}
          placeholder="Senha"
          placeholderTextColor={themas.colors.low_opacity_white}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={style.label}>Confirmar Senha</Text>
        <TextInput
          style={style.input}
          placeholder="Confirmar Senha"
          placeholderTextColor={themas.colors.low_opacity_white}
          secureTextEntry
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
        />
      </View>

      <View style={style.termsContainer}>
        <Checkbox
          style={style.checkbox}
          value={agreeTerms}
          onValueChange={setAgreeTerms}
          color={agreeTerms ? themas.colors.primary : undefined}
        />
        <Text style={style.termsText}>
          Eu concordo com
          <Text style={style.linkText}> Termos</Text> e{" "}
          <Text style={style.linkText}>Privacidade</Text>
        </Text>
      </View>

      <TouchableOpacity style={style.button} onPress={handleRegister}>
        <Text style={style.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      <Text style={style.footerText}>
        {"Já tem uma conta? "}
        <Text
          style={style.linkText}
          onPress={() => navigation.navigate("Login")}
        >
          Acessar
        </Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;
