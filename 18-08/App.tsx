import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// cria o objeto de navegação, nesse caso, navegação por pilhas
const Stack = createNativeStackNavigator();
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
