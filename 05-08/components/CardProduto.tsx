import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS } from "../palette/colors";

interface CardProdutoProps {
  foto: ImageSourcePropType;
  nome: string;
  preco: number;
}

function CardProduto({ foto, nome, preco }: CardProdutoProps) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <View style={styles.card} accessibilityLabel={`${nome}, ${precoFormatado}`}>
      <Image source={foto} style={styles.foto} resizeMode="cover" />

      <Text style={styles.nome} numberOfLines={2}>
        {nome}
      </Text>

      <Text style={styles.preco}>{precoFormatado}</Text>
    </View>
  );
}

export default CardProduto;

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.destaque,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 4,
  },

  foto: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.destaque,
    borderRadius: 8,
    marginBottom: 8
  },

  nome: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.texto,
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: 2
  },

  preco: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primaria,
  },
});
