import React from "react";
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Card } from "react-native-paper";
import { COLORS } from "../palette/colors";

interface CardProdutoProps {
  foto: string;
  nome: string;
  preco: number;
}

function CardProduto({ foto, nome, preco }: CardProdutoProps) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Card style={styles.card}>
      <Card.Title title={nome} style={styles.nome}></Card.Title>
      <Card.Cover style={styles.foto} source={{ uri: require(foto) }} />
      <Card.Content>
        <Text style={styles.preco}>{precoFormatado}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          style={styles.botao}
          mode="contained"
          onPress={() => console.log("Adicionado")}
          icon="cart"
        >
          Comprar
        </Button>
      </Card.Actions>
    </Card>
  );
}

export default CardProduto;

const styles = StyleSheet.create({
  card: {
    borderColor: COLORS.destaque,
  },

  foto: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.destaque,
    borderRadius: 8,
    marginBottom: 8,
  },

  botao: {
    backgroundColor: COLORS.destaque,
  },

  nome: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.texto,
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: 2,
  },

  preco: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primaria,
  },
});
