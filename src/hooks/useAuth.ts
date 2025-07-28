import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { RootStackParamList } from "../@types/navigation";
import { auth } from "../firebase";

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
  login: (credentials: LoginCredentials) => Promise<void>;
  loading: boolean;
  error: AuthError | null;
}

export function useAuth(): UseAuthReturn {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

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

  return { login, loading, error };
}
