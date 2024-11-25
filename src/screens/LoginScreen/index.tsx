import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { themas } from "../../global/themes";
import Logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";
import useEndpointAction from "../../hooks/useEndpointAction";
import useAuth from "../../hooks/useAuth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { login } = useAuth();
  const loginAction = useEndpointAction("POST", "/api/auth/login");

  const handleLogin = async () => {
    try {
      setLoading(true);

      if (!email || !password) {
        Alert.alert("Erro", "Informe todos os campos obrigatórios");
        return;
      }

      const response = await loginAction({ identifier: email, password });

      Alert.alert(response?.data?.message);

      if (response.status === 200) {
        const token = response.data.token;
        login(token);

        setEmail("");
        setPassword("");
        navigation.navigate("Feed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.topBox}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.title}>Acessar o Move Up</Text>
      </View>

      <View style={style.inputContainer}>
        <Text style={style.label}>E-mail</Text>
        <TextInput
          style={style.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor={themas.colors.low_opacity_white}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={style.label}>Senha</Text>
        <TextInput
          style={style.input}
          placeholder="Digite sua senha"
          placeholderTextColor={themas.colors.low_opacity_white}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Text style={style.text}>Esqueceu a senha?</Text>

      <TouchableOpacity
        style={style.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={themas.colors.lightgray} />
        ) : (
          <Text style={style.buttonText}>Acessar</Text>
        )}
      </TouchableOpacity>

      <Text style={style.footerText}>
        {"Não tem uma conta? "}
        <Text
          style={style.linkText}
          onPress={() => navigation.navigate("Register")}
        >
          Criar conta
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
