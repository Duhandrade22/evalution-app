import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();

  const handleLogin = async () => {
    await login({ email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça login na sua conta</Text>
      <Input
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        marginTop={20}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        error={error?.email}
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        autoCorrect={false}
        marginTop={10}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        error={error?.password}
        isPassword
      />
      {error?.general && <Text style={styles.errorText}>{error.general}</Text>}
      <Button
        label={loading ? "Carregando..." : "Entrar"}
        marginTop={20}
        backgroundColor="#1E9E6A"
        labelColor="#fff"
        onPress={handleLogin}
        disabled={loading}
      />
      <View style={styles.textContainer}>
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.textLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
