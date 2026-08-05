import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

interface CardProdutoProps {
  foto: ImageSourcePropType;
  nome: string;
  preco: number;
}
const CardProduto = ({ foto, nome, preco }: CardProdutoProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.foto} source={foto} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>{preco}</Text>
    </View>
  );
};

export default CardProduto;

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 14,
    gap: 7,
    alignItems: "center",
    minHeight: 300,
  },
  foto: {
    width: 120,
    height: 120,
  },
  nome: {
    fontSize: 10,
    fontWeight: "700",
  },
  preco: {
    fontSize: 8,
    textAlign: "center",
  },
});