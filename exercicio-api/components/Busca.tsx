import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

interface BuscaProps {
  termo: string;
  setTermo: (texto: string) => void;
}

const Busca = ({ termo, setTermo }: BuscaProps) => {
  return (
    <View>
      <TextInput
        placeholder="Digite o nome do pokémon para pesquisar..."
        value={termo}
      />
      <TouchableOpacity onPress={() => setTermo}>
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Busca;

const styles = StyleSheet.create({});
