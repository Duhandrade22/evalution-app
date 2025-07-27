import React from "react";
import { Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  isPassword?: boolean;
  marginTop?: number;
  marginBottom?: number;
}

export function Input({
  label,
  error,
  isPassword,
  marginTop = 0,
  marginBottom = 16,
  ...rest
}: InputProps) {
  const containerStyle: ViewStyle = {
    ...styles.container,
    marginTop,
    marginBottom,
  };
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...rest}
        style={[styles.input, error ? styles.inputError : {}]}
        secureTextEntry={isPassword}
        autoCapitalize={isPassword ? "none" : "sentences"}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
