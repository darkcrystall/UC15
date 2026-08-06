import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CampoNome = () => {
  const [nome, setNome] = useState<string>("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome..."
      />
      <Text>Você digitou {nome}</Text>
    </View>
  );
};

export default CampoNome;

const styles = StyleSheet.create({
  container: { gap: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
});
