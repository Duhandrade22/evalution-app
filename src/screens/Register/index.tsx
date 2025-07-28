import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../@types/navigation";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./styles";

export const Register = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error } = useAuth();

  const handleRegister = async () => {
    try {
      await register({ name, email, password });
    } catch (error) {
      Alert.alert("Erro ao criar conta");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar uma conta</Text>

      <Input
        label="Nome"
        placeholder="Digite seu nome"
        autoCorrect={false}
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
        error={error?.general}
        marginTop={20}
      />

      <Input
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        error={error?.email}
        marginTop={10}
      />

      <Input
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={error?.password}
        marginTop={10}
        isPassword
      />

      <Button
        label={loading ? "Criando conta..." : "Criar conta"}
        onPress={handleRegister}
        backgroundColor="#1E9E6A"
        labelColor="#fff"
        marginTop={20}
        disabled={loading}
      />

      <View style={styles.textContainer}>
        <Text>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.textLink}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
