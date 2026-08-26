import { StyleSheet, Text, View } from "react-native";
import ListaFavoritos from "./components/ListaFavoritos";
import BotaoSom from "./components/BotaoSom";
import MeuModal from "./components/MeuModal";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ListaFavoritos></ListaFavoritos>
        <BotaoSom></BotaoSom>
        <MeuModal></MeuModal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});