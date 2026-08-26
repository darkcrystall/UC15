import {
  Alert,
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
  const [produto, setProduto] = useState("");

  useEffect(() => {
    carregarFavoritos();
  }, []);

  const carregarFavoritos = async () => {
    try {
      const salvos = await AsyncStorage.getItem(CHAVE_FAVORITOS);

      if (salvos) {
        setFavoritos(JSON.parse(salvos));
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os favoritos.");
    }
  };

  const adicionarFavorito = async () => {
    const nome = produto.trim();

    if (!nome) {
      Alert.alert("Atenção", "Digite um produto.");
      return;
    }

    if (favoritos.includes(nome)) {
      Alert.alert("Atenção", "Esse produto já foi favoritado.");
      return;
    }

    const atualizados = [...favoritos, nome];

    setFavoritos(atualizados);
    setProduto("");

    await AsyncStorage.setItem(
      CHAVE_FAVORITOS,
      JSON.stringify(atualizados)
    );
  };

  const removerFavorito = async (nome: string) => {
    const atualizados = favoritos.filter(
      (favorito) => favorito !== nome
    );

    setFavoritos(atualizados);

    await AsyncStorage.setItem(
      CHAVE_FAVORITOS,
      JSON.stringify(atualizados)
    );
  };

  const removerTodos = async () => {
    Alert.alert(
      "Confirmar",
      "Deseja remover todos os favoritos?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          style: "destructive",
          onPress: async () => {
            setFavoritos([]);
            await AsyncStorage.removeItem(CHAVE_FAVORITOS);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Favoritos</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um produto"
        value={produto}
        onChangeText={setProduto}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={adicionarFavorito}
      >
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={favoritos}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <CardFavorito
            favorito={item}
            deletar={() => removerFavorito(item)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum favorito cadastrado.
          </Text>
        }
      />

      {favoritos.length > 0 && (
        <TouchableOpacity
          style={styles.botaoRemoverTodos}
          onPress={removerTodos}
        >
          <Text style={styles.textoBotao}>Remover Todos</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ListaFavoritos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    maxWidth: 500
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  botaoAdicionar: {
    backgroundColor: "#2ecc71",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  botaoRemoverTodos: {
    backgroundColor: "#c0392b",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  vazio: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
});