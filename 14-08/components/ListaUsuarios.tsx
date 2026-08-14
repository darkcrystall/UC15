import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  useEffect(() => {
    const buscaUsuarios = async () => {
      try {
        console.log("Bucando dados da API...");
        // GET dos dados de users da API
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // converte pra algo que possamos usar com JS
        const dados = await resposta.json();
        // users, nosso array criado
        setUsuarios(dados);
      } catch (error) {
        console.log("Erro: " + error);
      }
    };
    buscaUsuarios();
  }, []);
  return (
    <View>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>Nome: {item.name}, E-mail: {item.email}</Text>}
      />
    </View>
  );
};

export default ListaUsuarios;

const styles = StyleSheet.create({});
