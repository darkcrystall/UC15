import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

interface BuscaProps {
  termo: string;
  setTermo: (texto: string) => void;
}

const Busca = ({ termo, setTermo }: BuscaProps) => {
  const [texto, setTexto] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome de um Pokémon..."
        placeholderTextColor="#888"
        value={texto}
        onChangeText={setTexto}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setTermo(texto.trim().toLowerCase())}
      >
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Busca;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    fontSize: 16,
  },

  botao: {
    height: 48,
    marginTop: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});