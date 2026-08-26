import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CardFavoritoProps {
  favorito: string;
  deletar: () => void;
}

const CardFavorito = ({ favorito, deletar }: CardFavoritoProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{favorito}</Text>
      <TouchableOpacity style={styles.botao} onPress={deletar}>
        <Text style={styles.textoBotao}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardFavorito;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});