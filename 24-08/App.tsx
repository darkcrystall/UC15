import { StyleSheet, Text, View } from "react-native";
import CampoNome from "./components/CampoNome";
import FotoPerfil from "./components/FotoPerfil";

export default function App() {
  return (
    <View style={styles.container}>
      <CampoNome></CampoNome>
      <FotoPerfil></FotoPerfil>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});