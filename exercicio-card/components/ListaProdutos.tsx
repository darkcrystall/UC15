import { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import CardProduto from "./CardProduto";
import Busca from "./Busca";

const espresso = require("../assets/espresso.jpg");
const cappuccino = require("../assets/cappuccino.jpg");
const mocha = require("../assets/mocha.jpg");

const produtos = [
  { id: 1, foto: espresso, nome: "espresso", preco: 6 },
  { id: 2, foto: cappuccino, nome: "cappuccino", preco: 9.5 },
  { id: 3, foto: mocha, nome: "mocha", preco: 12 },
  { id: 4, foto: espresso, nome: "latte", preco: 10 },
  { id: 5, foto: cappuccino, nome: "macchiato", preco: 11 },
  { id: 6, foto: mocha, nome: "chocolate quente", preco: 8 },
  { id: 7, foto: espresso, nome: "café gelado", preco: 13 },
  { id: 8, foto: cappuccino, nome: "frappuccino", preco: 15 },
];

function ListaProdutos() {
  const [termo, setTermo] = useState("");
  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termo.toLowerCase()),
  );

  return (
    <FlatList
      data={produtosFiltrados}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <CardProduto foto={item.foto} nome={item.nome} preco={item.preco} />
      )}
      ListHeaderComponent={<Busca termo={termo} setTermo={setTermo} />}
      ListEmptyComponent={
        <Text style={styles.empty}>Nenhum produto encontrado.</Text>
      }
    />
  );
}

export default ListaProdutos;

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  row: {
    justifyContent: "space-between",
    gap: 16,
  },
  empty: {
    textAlign: "center",
    marginTop: 32,
    fontSize: 16,
    color: "#888",
  },
});
