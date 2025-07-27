import { StatusBar } from "react-native";
import { AppStack } from "./src/routes/app.stack";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <AppStack />
    </>
  );
}
