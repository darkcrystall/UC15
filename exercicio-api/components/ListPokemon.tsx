import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CardPokemon, { DadosPokemon } from "./CardPokemon";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import Busca from "./Busca";

const ListPokemon = () => {
  const [termo, setTermo] = useState("");
  const [pokemons, setPokemons] = useState<DadosPokemon[]>([]);
  useEffect(() => {
    const buscarPokemons = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${termo}/`
        );
        const dados = await response.json();
        setPokemons(dados);
      } catch (error) {
        console.log("Erro: " + error);
      }
    };
    buscarPokemons();
  }, []);

  const dados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(termo.toLowerCase())
  );

  return (
    <ScrollView>
      <Busca termo={termo} setTermo={() => setTermo}></Busca>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardPokemon dados={item}></CardPokemon>}
      />
    </ScrollView>
  );
};

export default ListPokemon;

const styles = StyleSheet.create({});
