import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../palette/colors";

interface BuscaProps {
  termo: string;
  setTermo: (texto: string) => void;
}

export default function Busca({ termo, setTermo }: BuscaProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um termo para pesquisar..."
        value={termo}
        onChangeText={setTermo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: COLORS.destaque,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
});
