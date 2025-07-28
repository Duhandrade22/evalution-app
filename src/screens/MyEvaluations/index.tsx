import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { StarRating } from "../../components/StarRating";
import { useAuth } from "../../hooks/useAuth";
import { useEvaluation } from "../../hooks/useEvaluation";
import { styles } from "./styles";

interface Evaluation {
  id: string;
  rating: number;
  description: string;
  createdAt: any;
}

const MyEvaluations = () => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const { getUserEvaluations, loading, error } = useEvaluation();
  const { logout, loading: authLoading } = useAuth();

  useEffect(() => {
    const loadEvaluations = async () => {
      const data = await getUserEvaluations();
      setEvaluations(data as Evaluation[]);
    };
    loadEvaluations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderEvaluationItem = ({ item }: { item: Evaluation }) => (
    <View style={styles.evaluationItem}>
      <StarRating rating={item.rating} />
      {item.description && (
        <Text style={styles.descriptionText}>{item.description}</Text>
      )}
      <Text style={styles.dateText}>
        {new Date(item.createdAt.toDate()).toLocaleDateString("pt-BR")}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View>
        <Header title="Minhas Avaliações" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1E9E6A" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Minhas Avaliações" />
      {error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={evaluations}
          renderItem={renderEvaluationItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Você ainda não tem avaliações</Text>
          )}
        />
      )}
      <View style={styles.buttonContainer}>
        <Button
          label="Sair"
          backgroundColor="#1E9E6A"
          labelColor="#fff"
          onPress={logout}
          disabled={authLoading}
        />
      </View>
    </View>
  );
};

export default MyEvaluations;
