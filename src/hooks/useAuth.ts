import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { Alert } from "react-native";
import { RootStackParamList } from "../@types/navigation";
import { auth } from "../firebase";

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthError {
  email?: string;
  password?: string;
  general?: string;
}

interface UseAuthReturn {
  register: (credentials: RegisterCredentials) => Promise<void>;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: AuthError | null;
}

export function useAuth(): UseAuthReturn {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const register = async ({ name, email, password }: RegisterCredentials) => {
    setError(null);

    if (!name) {
      setError({ general: "Nome é obrigatório" });
      return;
    }

    if (!email) {
      setError({ general: "Email é obrigatório" });
      return;
    }

    if (!password) {
      setError({ general: "Senha é obrigatória" });
      return;
    }
    if (password.length < 6) {
      setError({ general: "Senha deve ter pelo menos 6 caracteres" });
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      Alert.alert("Registro realizado com sucesso!");
      console.log("Registro realizado com sucesso!", userCredential.user);
      navigate("main");
    } catch (err: any) {
      console.error("Erro no registro:", err);
      switch (err.code) {
        case "auth/email-already-in-use":
          setError({ email: "Este email já está em uso" });
          break;
        case "auth/invalid-email":
          setError({ email: "Email inválido" });
          break;
        case "auth/weak-password":
          setError({ password: "Senha muito fraca" });
          break;
        default:
          setError({ general: "Erro ao criar conta" });
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }: LoginCredentials) => {
    setError(null);

    if (!email) {
      setError({ email: "Email é obrigatório" });
      return;
    }

    if (!password) {
      setError({ password: "Senha é obrigatória" });
      return;
    }

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Login realizado com sucesso!", userCredential.user);
      navigate("main");
    } catch (err: any) {
      console.error("Erro no login:", err);

      switch (err.code) {
        case "auth/invalid-email":
          setError({ email: "Email inválido" });
          break;
        case "auth/user-not-found":
          setError({ email: "Usuário não encontrado" });
          break;
        case "auth/wrong-password":
          setError({ password: "Senha incorreta" });
          break;
        case "auth/too-many-requests":
          setError({
            general: "Muitas tentativas. Tente novamente mais tarde.",
          });
          break;
        case "auth/network-request-failed":
          setError({ general: "Erro de conexão. Verifique sua internet." });
          break;
        case "auth/invalid-credential":
          setError({ general: "Credenciais inválidas. Verifique seus dados." });
          break;
        default:
          console.error("Código do erro:", err.code);
          setError({ general: `Erro: ${err.code}` });
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      navigate("login");
    } catch (err: any) {
      console.error("Erro ao sair:", err);
      setError({ general: "Erro ao sair logout" });
    } finally {
      setLoading(false);
    }
  };

  return { login, register, loading, error, logout };
}
