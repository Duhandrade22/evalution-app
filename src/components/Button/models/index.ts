import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  backgroundColor?: string;
  labelColor?: string;
  marginTop?: number;
  marginBottom?: number;
  isLoading?: boolean;
}
