import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Contador = () => {
  /** o useState é uma função especial do react native e do react, que retorna um array com duas coisas: um valor e uma função para mudar essse valor. chamamos ele assim: useState(valorInicial), o valor dentro dos parênteses é o valor inicial da variável */
  const [contador, setContador] = useState<number>(0);
  return (
    <View style={styles.linha}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContador(contador - 1)}
      >
        <Text style={styles.botaoTexto}>-</Text>
      </TouchableOpacity>

      <Text style={styles.numero}>{contador}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.botaoTexto}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contador;

const styles = StyleSheet.create({
  linha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  botao: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4ade9e",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: { fontSize: 20, fontWeight: "bold" },
  numero: {
    fontSize: 24,
    fontWeight: "bold",
    minWidth: 36,
    textAlign: "center",
  },
});