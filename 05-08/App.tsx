import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardProduto from "./components/CardProduto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./palette/colors";

const produtos = [
  { id: "1", foto: require("./assets/espresso.jpg"), nome: "espresso", preco: 6 },
  { id: "2", foto: require("./assets/cappuccino.jpg"), nome: "cappuccino", preco: 9.5 },
  { id: "3", foto: require("./assets/mocha.jpg"), nome: "mocha", preco: 12 },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.titulo} accessibilityRole="header">cafeteria</Text>
          <Text style={styles.subtitulo}>produtos em destaque</Text>
          <View style={styles.produtos}>
            {produtos.map((p) => (
              <CardProduto key={p.id} foto={p.foto} nome={p.nome} preco={p.preco} />
            ))}
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.fundo,
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
    color: COLORS.texto,
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: COLORS.textoSecundario,
    marginBottom: 24,
  },
  produtos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 30,
  },
});