import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ButtonProps } from "./models";
import { styles } from "./styles";

const Button = ({
  label,
  backgroundColor = "#007bff",
  labelColor = "#fff",
  marginTop = 0,
  marginBottom = 0,
  isLoading = false,
  disabled,
  style,
  ...rest
}: ButtonProps) => {
  const buttonStyle: ViewStyle = {
    ...styles.container,
    backgroundColor: disabled ? "#CCCCCC" : backgroundColor,
    marginTop,
    marginBottom,
  };
  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={labelColor} />
      ) : (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
