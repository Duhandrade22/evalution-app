import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Rating } from "react-native-ratings";
import { Input } from "../../components/Input";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, TabParamList } from "../../@types/navigation";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { useEvaluation } from "../../hooks/useEvaluation";
import { styles } from "./style";

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Avaliar">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const Evaluation = () => {
  const navigation = useNavigation<NavigationProp>();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { createEvaluation } = useEvaluation();

  const handleSubmit = async () => {
    if (rating === 0) {
      Alert.alert("Por favor, avalie a experiência");
      return;
    }
    try {
      await createEvaluation(rating, comment);
      Alert.alert("Avaliação enviada com sucesso", "Obrigado por avaliar", [
        {
          text: "ok",
          onPress: () => {
            navigation.navigate("Minhas Avaliações");
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Erro ao enviar avaliação");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Avaliação" />
      <View style={styles.ratingContainer}>
        <Text style={styles.subtitle}>Como você avalia sua experiência?</Text>
        <Rating
          type="star"
          ratingCount={5}
          onFinishRating={setRating}
          style={styles.rating}
        />
      </View>
      <Input
        style={styles.commentInput}
        label="Comentário"
        placeholder="Deixe seu comentário (opcional)"
        multiline
        numberOfLines={4}
        value={comment}
        onChangeText={setComment}
      />
      <Button
        label="Enviar Avaliação"
        backgroundColor="#1E9E6A"
        labelColor="#fff"
        marginTop={20}
        onPress={handleSubmit}
      />
    </View>
  );
};
