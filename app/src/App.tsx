import { AppRegistry, StatusBar } from "react-native";
import { AppStack } from "./routes/app.stack";

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <AppStack />
    </>
  );
}

AppRegistry.registerComponent("main", () => App);

export default App;
