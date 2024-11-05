import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { themas } from '../global/themes';
import Logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Informe todos os campos obrigatórios');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            if (email === 'emilybiecoski@hotmail.com' && password === '123456') {
                Alert.alert('Sucesso', 'Login realizado com sucesso');
                // Navegar para a próxima tela ou realizar outra ação
            } else {
                Alert.alert('Erro', 'Usuário ou senha incorretos');
            }
            setLoading(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
                <Text style={styles.title}>Acessar o Move Up</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail ou Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail ou username"
                    placeholderTextColor={themas.colors.placeholder}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor={themas.colors.placeholder}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                {loading ? (
                    <ActivityIndicator size="small" color={themas.colors.buttonText} />
                ) : (
                    <Text style={styles.buttonText}>Acessar</Text>
                )}
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Não tem uma conta?{' '}
                <Text 
                    style={styles.linkText} 
                    onPress={() => navigation.navigate('Register')}
                >
                    Criar conta
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themas.colors.background,
        padding: 20,
        justifyContent: 'center',
    },
    topBox: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 120,
        height: 120,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: themas.colors.primary,
        marginTop: 10,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: themas.colors.text,
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: themas.colors.inputBackground,
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        color: themas.colors.text,
        marginBottom: 15,
    },
    button: {
        backgroundColor: themas.colors.primary,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: themas.colors.buttonText,
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerText: {
        textAlign: 'center',
        color: themas.colors.text,
        marginTop: 15,
        fontSize: 14,
    },
    linkText: {
        color: themas.colors.primary,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
