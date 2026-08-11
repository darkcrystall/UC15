import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import CardUsuario from "./CardUsuario";

const dadosUsuario = [
  { id: 1, nome: "Usuário 1", email: "teste1@teste.com" },
  { id: 2, nome: "Usuário 2", email: "teste2@teste.com" },
  { id: 3, nome: "Usuário 3", email: "teste3@teste.com" },
  { id: 4, nome: "Usuário 4", email: "teste4@teste.com" },
  { id: 5, nome: "Usuário 5", email: "teste5@teste.com" },
];

/* o componente 'FlatList' renderiza dados de forma dinâmica, ou seja, ele lê dados do banco ou de um array, por exemplo, e cosegue criar cards com esses dados */
const ListaUsuarios = () => {
  return (
    <ScrollView>
      <FlatList
        data={dadosUsuario} // de onde vem os dados
        keyExtractor={(item) => item.id.toString()} // a chave única de cada item
        numColumns={3}
        renderItem={({ item }) => (
          <CardUsuario
            id={item.id}
            nome={item.nome}
            email={item.email}
          ></CardUsuario>
        )}
      ></FlatList>
    </ScrollView>
  );
};

export default ListaUsuarios;

const styles = StyleSheet.create({});
