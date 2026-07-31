import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CartaoPerfil from "./components/CartaoPerfil";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <CartaoPerfil/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
