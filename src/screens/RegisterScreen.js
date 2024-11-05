import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, Animated } from 'react-native';
import { themas } from '../global/themes';

const RegisterScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false); 

    const handleRegister = () => {
        Alert.alert('Conta criada com sucesso!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crie sua Conta</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                placeholderTextColor={themas.colors.placeholder}
                value={fullName}
                onChangeText={setFullName}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={themas.colors.placeholder}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Código de Verificação"
                placeholderTextColor={themas.colors.placeholder}
                keyboardType="numeric"
                value={verificationCode}
                onChangeText={setVerificationCode}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={themas.colors.placeholder}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.termsContainer}>
                <TouchableOpacity onPress={() => setAgreeTerms(!agreeTerms)}>
                    <View style={[styles.checkbox, agreeTerms && styles.checkedCheckbox]} />
                </TouchableOpacity>
                <Text style={styles.termsText}>
                    Eu concordo com os{' '}
                    <Text style={styles.linkText}>termos de serviço</Text> e <Text style={styles.linkText}>política de privacidade</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Ou conecte-se com</Text>
            
            <View style={styles.socialIconsContainer}>
                <TouchableOpacity>
                    <Image source={require('../assets/facebook.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/google.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/linkedin.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themas.colors.background,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: themas.colors.primary,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: themas.colors.inputBackground,
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        color: themas.colors.text,
        marginBottom: 15,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkbox: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: themas.colors.primary,
        borderRadius: 5,
        marginRight: 10,
    },
    checkedCheckbox: {
        backgroundColor: themas.colors.primary,
    },
    termsText: {
        color: themas.colors.text,
        fontSize: 14,
    },
    linkText: {
        color: themas.colors.primary,
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: themas.colors.primary,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: themas.colors.buttonText,
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        color: themas.colors.text,
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 14,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    icon: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
});

export default RegisterScreen;
