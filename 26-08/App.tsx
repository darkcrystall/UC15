import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapaUsuario from "./components/MapaUsuario";
import MapaTempoReal from "./components/MapaTempoReal";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MapaUsuario></MapaUsuario> */}
      <MapaTempoReal></MapaTempoReal>
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