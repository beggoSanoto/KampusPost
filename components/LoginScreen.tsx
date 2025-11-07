import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomInput from './CustomInput';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');






    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Eksik Bilgi', 'Lütfen e-posta ve şifre alanlarını doldurun.');
            return;
        }

        console.log('E-posta:', email);
        console.log('Şifre:', password);
        Alert.alert('Giriş Başarılı', `Hoş geldiniz: ${email}`);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Giriş Yap</Text>

            <CustomInput
                placeholder="E-posta"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <CustomInput
                placeholder="Şifre"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
