import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type CustomInputProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric';
};

const CustomInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default'
}: CustomInputProps) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});

export default CustomInput;