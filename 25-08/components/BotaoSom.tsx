import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useAudioPlayer } from "expo-audio";

const BotaoSom = () => {
  const player = useAudioPlayer(require("../assets/music.mp3"));

  const [tocando, setTocando] = useState(false);

  const tocar = () => {
    player.play();
    setTocando(true);
  };

  const pausar = () => {
    player.pause();
    setTocando(false);
  };

  const reiniciar = () => {
    player.seekTo(0); // serve para iniciar no 0
    player.play(); 
    setTocando(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Player de Áudio</Text>

      <Text style={styles.status}>
        Status: {tocando ? "Tocando" : "Pausado"}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={tocando ? pausar : tocar}
      >
        <Text style={styles.textoBotao}>
          {tocando ? "Pausar" : "Tocar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, styles.botaoSecundario]}
        onPress={reiniciar}
      >
        <Text style={styles.textoBotao}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoSom;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#3498db",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    minWidth: 120,
  },
  botaoSecundario: {
    backgroundColor: "#2ecc71",
  },
  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});