import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  isPassword?: boolean;
  marginTop?: number;
  marginBottom?: number;
}
