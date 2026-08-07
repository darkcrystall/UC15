import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";

const Somar = () => {
  const [numero1, setNumero1] = useState<string>("");
  const [numero2, setNumero2] = useState<string>("");
  const [resultado, setResultado] = useState<number>(0);

  const calcularSoma = () => {
    if (!numero1.trim() || !numero2.trim()) {
      return;
    }
    setResultado(Number(numero1) + Number(numero2));
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          value={numero1}
          onChangeText={setNumero1}
          keyboardType="numeric"
          placeholder="Digite um número..."
        ></TextInput>
        <Text style={styles.icon}>+</Text>
        <TextInput
          style={styles.input}
          value={numero2}
          onChangeText={setNumero2}
          keyboardType="numeric"
          placeholder="Digite um número..."
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.botao} onPress={calcularSoma}>
        <Text style={styles.botaoTexto}>Somar</Text>
      </TouchableOpacity>
      <View>
        <Text style={[styles.result, isNaN(resultado) && styles.erro]}>
          {isNaN(resultado) ? "Apenas números" : resultado}
        </Text>
      </View>
    </View>
  );
};

export default Somar;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },

  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },

  icon: {
    fontSize: 24,
    fontWeight: "bold",
  },

  botao: {
    backgroundColor: "#4ade9e",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  botaoTexto: {
    fontSize: 16,
    fontWeight: "bold",
  },

  result: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  erro: {
    color: "red",
  },
});
