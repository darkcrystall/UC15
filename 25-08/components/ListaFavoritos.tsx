import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardFavorito from "./CardFavorito";

const CHAVE_FAVORITOS = "@25-08:favoritos";

const ListaFavoritos = () => {
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [produto, setProduto] = useState<string>("");
  useEffect(() => {
    const carregar = async () => {
      const salvos = await AsyncStorage.getItem(CHAVE_FAVORITOS);
      if (salvos) {
        setFavoritos(JSON.parse(salvos)); // converte os dados em array de objetos
      }
      carregar();
    };
  }, []);

  const adicionarFavoritos = async (produto: string) => {
    const atualizados = [...favoritos, produto];
    setFavoritos(atualizados);
    // o stringify transforma novamente em string
    await AsyncStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(atualizados));
  };
  const removerFavorito = async (key: string) => {
    await AsyncStorage.removeItem(key);
  };
  const removerTodos = async () => {
    await AsyncStorage.multiRemove(favoritos)
  }
  return (
    <View>
      <FlatList
        data={favoritos}
        keyExtractor={(item, index) => index.toString()} // o primeiro parâmetro é o item, o segundo é o índice
        renderItem={({ item }) => <CardFavorito favorito={item} deletar={() => removerFavorito(item)}></CardFavorito>}
      />
      <TextInput
        placeholder="Adicionar favorito"
        onChangeText={setProduto}
        value={produto}
      />
      <TouchableOpacity onPress={() => adicionarFavoritos(produto)}>
        <Text>Favoritar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removerTodos}>
        <Text>Remover todos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListaFavoritos;

const styles = StyleSheet.create({});
