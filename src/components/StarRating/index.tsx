import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { StarRatingProps } from "./models";

export const StarRating = ({
  rating,
  size = 16,
  color = "#FFD700",
  showNumber = false,
}: StarRatingProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Feather
        key={i}
        name={i <= rating ? "star" : "star"}
        size={size}
        color={i <= rating ? color : "#E0E0E0"}
      />
    );
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {stars}
      {showNumber && (
        <Text style={{ marginLeft: 8, fontSize: size, color: "#666" }}>
          ({rating})
        </Text>
      )}
    </View>
  );
};
