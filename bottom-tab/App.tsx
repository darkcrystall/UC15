import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// cria o objeto de navegação, nesse caso, navegação por pilhas
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
// container que envolve a tela para navegação
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  </NavigationContainer>;
}

const styles = StyleSheet.create({});
