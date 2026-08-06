import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";

const Somar = () => {
  const [numero1, setNumero1] = useState<string>("");
  const [numero2, setNumero2] = useState<string>("");
  const [resultado, setResultado] = useState<number>(0);

  function soma(num1: number, num2: number): number {
    return Number(num1) + Number(num2);
  }
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          value={numero1}
          onChangeText={setNumero1}
          placeholder="Digite um número..."
        ></TextInput>
        <Text style={styles.icon}>+</Text>
        <TextInput
          style={styles.input}
          value={numero2}
          onChangeText={setNumero2}
          placeholder="Digite um número..."
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setResultado(soma(Number(numero1), Number(numero2)))}
      >
        <Text style={styles.botaoTexto}>Somar</Text>
      </TouchableOpacity>
      <View style={styles.centering}>
        <Text style={styles.result}>{resultado}</Text>
      </View>
    </View>
  );
};

export default Somar;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
  },
  centering: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  icon: {
    fontSize: 20,
    fontWeight: "800",
    margin: 10,
  },
  result: {
    fontSize: 16,
    fontWeight: "700",
  },
  container: { gap: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontWeight: "400",
  },
  botao: {
    backgroundColor: "#4ade9e",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  botaoTexto: { fontSize: 20, fontWeight: "bold" },
});
