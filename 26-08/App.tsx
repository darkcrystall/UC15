import { View, StyleSheet, Platform } from "react-native";
import React from "react";

// carrega a versão correta de cada mapa baseado na plataforma
const MapaTempoReal =
  Platform.OS === "web"
    ? require("./components/MapaTempoRealWeb").default
    : require("./components/MapaTempoRealMobile").default;

const MapaUsuario =
  Platform.OS === "web"
    ? require("./components/MapaUsuarioWeb").default
    : require("./components/MapaUsuarioMobile").default;

const App = () => {
  return (
    <View style={styles.container}>
      {/* primeiro mapa: tempo real */}
      <View style={styles.mapaContainer}>
        <MapaTempoReal />
      </View>

      {/* segundo mapa: usuário (com pins) */}
      <View style={styles.mapaContainer}>
        <MapaUsuario />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: Platform.OS === "web" ? "row" : "column", // web: lado a lado; mobile: um abaixo do outro
    padding: Platform.OS === "web" ? 8 : 0,
  },
  mapaContainer: {
    flex: 1,
    height: Platform.OS === "web" ? "100%" : "50%", // web: altura total; mobile: cada um ocupa metade
    borderWidth: 1,
    borderColor: "#ccc",
    margin: Platform.OS === "web" ? 4 : 0,
    borderRadius: 4,
    overflow: "hidden",
  },
});

export default App;