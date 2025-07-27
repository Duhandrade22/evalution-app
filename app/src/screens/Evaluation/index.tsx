import React, { useState } from "react";
import { Text, View } from "react-native";
import { Rating } from "react-native-ratings";
import { Input } from "../../components/Input";

import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { styles } from "./style";

export const Evaluation = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log({ rating, comment });
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
