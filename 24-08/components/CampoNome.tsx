import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CampoNome = () => {
  const [nome, setNome] = useState<string>("");
  useEffect(() => {
    // carrega dados salvos no armazenamento interno
    const carregar = async () => {
      // getItem procura item salvo na memória que tenha o nome indicado
      const salvo = await AsyncStorage.getItem("nome");
      if (salvo) {
        setNome(salvo); // salva a informação dentro da variável "nome"
      }
    };
    carregar();
  }, []);
  // salva o dado na memória interna do dispositivo
  const salvar = async () => {
    await AsyncStorage.setItem("nome", nome); // salva na memória um item chamado "nome", com valor da variável nome
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Digite seu nome..."
      />
      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CampoNome;

const styles = StyleSheet.create({
  container: { gap: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10 },
  botao: {
    backgroundColor: "#4ade9e",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoTexto: { fontWeight: "bold" },
});