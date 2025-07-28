import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";

interface Evaluation {
  userId: string;
  rating: number;
  description: string;
  createdAt: Date;
}

export const useEvaluation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createEvaluation = async (rating: number, description: string) => {
    if (!auth.currentUser) {
      setError("Usuário não autenticado");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const evaluationData: Evaluation = {
        userId: auth.currentUser.uid,
        rating,
        description,
        createdAt: new Date(),
      };
      const docRef = await addDoc(
        collection(db, "evaluations"),
        evaluationData
      );
      console.log("Avaliação criada com sucesso", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Erro ao criar avaliação", error);
      setError("Erro ao criar avaliação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const getUserEvaluations = async () => {
    if (!auth.currentUser) {
      setError("Usuário não autenticado");
      return [];
    }
    setLoading(true);
    setError(null);

    try {
      const q = query(
        collection(db, "evaluations"),
        where("userId", "==", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const evaluations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return evaluations;
    } catch (error) {
      console.error("Erro ao buscar avaliações", error);
      setError("Erro ao buscar avaliações. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createEvaluation,
    getUserEvaluations,
  };
};
