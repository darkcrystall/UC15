import { View, Text, Image } from "react-native";
import React from "react";

export interface DadosPokemon {
  id: number,
  name: string;
  sprites: {
    front_default: string;
  };
}

interface CardProps {
  dados: DadosPokemon;
}

const CardPokemon = ({ dados }: CardProps) => {
  return (
    <View>
      <Image source={{ uri: dados.sprites.front_default }} />
      <Text>{dados.name}</Text>
    </View>
  );
};

export default CardPokemon;
