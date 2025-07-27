import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

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
        default:
          setError({ general: "Erro ao fazer login. Tente novamente." });
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
