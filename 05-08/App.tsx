import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cartao from "./components/Cartao";
import PerfilCard from "./components/PerfilCard";
import CardProduto from "./components/CardProduto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <CardProduto
            foto={require("./assets/icon.png")}
            nome="produto"
            preco={5}
          />
          <CardProduto
            foto={require("./assets/splash-icon.png")}
            nome="novo produto"
            preco={10}
          />
          <CardProduto
            foto={require("./assets/adaptive-icon.png")}
            nome="outro produto"
            preco={15}
          />
          <StatusBar style="auto" />
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
