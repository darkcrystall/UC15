import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CardPokemon, { DadosPokemon } from "./CardPokemon";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import Busca from "./Busca";

const ListPokemon = () => {
  const [termo, setTermo] = useState("");
  const [pokemons, setPokemons] = useState<DadosPokemon[]>([]);
  const [preview, setPreview] = useState<DadosPokemon[]>([]);

  useEffect(() => {
    const carregarPreview = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );

        const dados = await response.json();

        const detalhes = await Promise.all(
          dados.results.map(async (pokemon: { url: string }) => {
            const response = await fetch(pokemon.url);
            return response.json();
          })
        );
        setPreview(detalhes);
        setPokemons(detalhes);
      } catch (error) {
        console.log(error);
      }
    };

    carregarPreview();
  }, []);

  useEffect(() => {
    if (!termo) {
      setPokemons(preview);
      return;
    }

    const buscarPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${termo.toLowerCase()}`
        );

        if (!response.ok) {
          setPokemons([]);
          return;
        }

        const dados = await response.json();
        setPokemons([dados]);
      } catch (error) {
        console.log(error);
      }
    };

    buscarPokemon();
  }, [termo, preview]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Busca termo={termo} setTermo={setTermo}></Busca>
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardPokemon dados={item}></CardPokemon>}
          numColumns={2}
          columnWrapperStyle={styles.linha}
          contentContainerStyle={styles.lista}
          ListEmptyComponent={<Text>Nenhum pokémon encontrado</Text>}
        />
      </View>
    </ScrollView>
  );
};

export default ListPokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  lista: {
    paddingBottom: 20,
  },

  linha: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
});