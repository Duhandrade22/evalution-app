import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../@types/navigation";

// Importando as telas
import Login from "../screens/Login";
import { Register } from "../screens/Register";
import { AppTabs } from "./app.tabs";
const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="main" component={AppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
