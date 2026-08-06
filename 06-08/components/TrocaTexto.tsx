import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const TrocaTexto = () => {
  const [texto, setTexto] = useState<string>("desligado");
  return (
    <View>
      <Text>{texto}</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          setTexto(texto === "desligado" ? "ligado" : "desligado");
        }}
      >
        <Text style={styles.textoBotao}>Ligar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrocaTexto;

const styles = StyleSheet.create({
  botao: {
    padding: 10,
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
  },
  textoBotao: {
    color: "#fff",
  },
});
