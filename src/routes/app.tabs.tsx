import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Evaluation } from "../screens/Evaluation";
import MyEvaluations from "../screens/MyEvaluations";

const Tab = createBottomTabNavigator();

export function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1E9E6A",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Avaliar"
        component={Evaluation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="smile" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Minhas Avaliações"
        component={MyEvaluations}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
