import { ScrollView, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { FlatList } from "react-native";
import CardProduto from "./CardProduto";
import Busca from "./Busca";

const produtos = [
  {
    id: 1,
    foto: require("../assets/espresso.jpg"),
    nome: "espresso",
    preco: 6,
  },
  {
    id: 2,
    foto: require("../assets/cappuccino.jpg"),
    nome: "cappuccino",
    preco: 9.5,
  },
  { id: 3, foto: require("../assets/mocha.jpg"), nome: "mocha", preco: 12 },
  { id: 4, foto: require("../assets/espresso.jpg"), nome: "latte", preco: 10 },
  {
    id: 5,
    foto: require("../assets/cappuccino.jpg"),
    nome: "macchiato",
    preco: 11,
  },
  {
    id: 6,
    foto: require("../assets/mocha.jpg"),
    nome: "chocolate quente",
    preco: 8,
  },
  {
    id: 7,
    foto: require("../assets/espresso.jpg"),
    nome: "café gelado",
    preco: 13,
  },
  {
    id: 8,
    foto: require("../assets/cappuccino.jpg"),
    nome: "frappuccino",
    preco: 15,
  },
];

function ListaProdutos() {
  const [termo, setTermo] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termo.toLowerCase()),
  );

  return (
    <ScrollView>
      <Busca termo={termo} setTermo={setTermo} />

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 12,
        }}
        renderItem={({ item }) => (
          <CardProduto foto={item.foto} nome={item.nome} preco={item.preco} />
        )}
        ListEmptyComponent={<Text>Nenhum produto encontrado.</Text>}
      />
    </ScrollView>
  );
}

export default ListaProdutos;

const styles = StyleSheet.create({});