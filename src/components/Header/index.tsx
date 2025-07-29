import React from "react";
import { Text, View } from "react-native";
import { HeaderProps } from "./models";
import { styles } from "./style";

export const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
