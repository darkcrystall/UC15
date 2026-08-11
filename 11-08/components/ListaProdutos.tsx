import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import CardProduto from "./CardProduto";

const produtos = [
  { id: 1, foto: require("../assets/espresso.jpg"), nome: "espresso", preco: 6 },
  {
    id: 2,
    foto: require("../assets/cappuccino.jpg"),
    nome: "cappuccino",
    preco: 9.5,
  },
  { id: 3, foto: require("../assets/mocha.jpg"), nome: "mocha", preco: 12 },
];

const ListaProdutos = () => {
  return (
    <ScrollView>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardProduto
            foto={item.foto}
            nome={item.nome}
            preco={item.preco}
          ></CardProduto>
        )}
      ></FlatList>
    </ScrollView>
  );
};

export default ListaProdutos;

const styles = StyleSheet.create({});
