import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333",
  },

  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderBlockColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#fff",
  },

  inputError: {
    borderColor: "#ff3b30",
  },

  errorText: {
    color: "#ff3b30",
    fontSize: 12,
    marginTop: 4,
  },
});
