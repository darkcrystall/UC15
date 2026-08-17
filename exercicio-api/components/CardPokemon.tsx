import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

export interface DadosPokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

interface CardProps {
  dados: DadosPokemon;
}

const CardPokemon = ({ dados }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.imagem}
        source={{ uri: dados.sprites.front_default }}
      />
      <Text style={styles.nome}>{dados.name}</Text>
    </View>
  );
};

export default CardPokemon;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#f2f2f2",
  },

  imagem: {
    width: 120,
    height: 120,
  },

  nome: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
