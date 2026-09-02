import React, { useState } from "react";
import { Alert, ImageSourcePropType, StyleSheet, View } from "react-native";
import {
  Card,
  Button,
  Text,
  Dialog,
} from "react-native-paper";
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
    <>
      <Card mode="contained" style={styles.card}>
        <Card.Title
          title={nome}
          titleStyle={styles.nome}
          titleNumberOfLines={2}
        />
        <Card.Cover source={foto} style={styles.foto} />
        <Card.Content>
          <Text style={styles.preco}>{precoFormatado}</Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            style={styles.botao}
            mode="contained"
            onPress={() => Alert.alert("Confirmação", "Pedido enviado", )}
            icon="cart"
            labelStyle={styles.botaoLabel}
            dark={true}
          >
            Pedir
          </Button>
        </Card.Actions>
      </Card>
      </>
  );
}

export default CardProduto;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 6,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1, // ← borda visível
    borderColor: COLORS.destaque, // ← cor da borda
    overflow: "hidden", // para respeitar o borderRadius
  },
  foto: {
    width: "100%",
    height: 140,
    backgroundColor: COLORS.destaque,
  },
  nome: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.texto,
    textAlign: "center",
    flexWrap: "wrap",
    marginTop: 4,
  },
  preco: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primaria,
    textAlign: "center",
    marginTop: 2,
  },
  actions: {
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  botao: {
    backgroundColor: COLORS.destaque,
    width: "100%",
    borderRadius: 8,
  },
  botaoLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
  // Estilos do Dialog
  dialog: {
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  dialogTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primaria,
  },
  dialogText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
  },
  dialogButton: {
    backgroundColor: COLORS.destaque,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
});
