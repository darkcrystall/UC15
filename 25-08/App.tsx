import { StyleSheet, Text, View } from "react-native";
import ListaFavoritos from "./components/ListaFavoritos";

export default function App() {
  return (
    <View style={styles.container}>
      <ListaFavoritos></ListaFavoritos>
    </View>
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