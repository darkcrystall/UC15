import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TrocaTexto = () => {
  const [ligado, setLigado] = useState(false);

  const alternarEstado = () => {
    setLigado((estadoAtual) => !estadoAtual);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={[
          styles.botao,
          ligado ? styles.botaoLigado : styles.botaoDesligado,
        ]}
        onPress={alternarEstado}
      >
        <Text style={styles.textoBotao}>{ligado ? "Desligar" : "Ligar"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrocaTexto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  texto: {
    fontSize: 18,
    fontWeight: "bold",
  },

  textoLigado: {
    color: "green",
  },

  textoDesligado: {
    color: "red",
  },

  botao: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  botaoLigado: {
    backgroundColor: "red",
  },

  botaoDesligado: {
    backgroundColor: "green",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "600",
  },
});
