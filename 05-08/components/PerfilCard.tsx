import { StyleSheet, Text, View } from "react-native";
import React from "react";

// criar uma interface com as propriedades com as tipagens
interface PerfilCardProps {
  nome: string;
}

// usando desestruturação de objetos, dentro dos parênteses usamos a interface e as propriedades
const PerfilCard = ({nome}: PerfilCardProps) => {
  return (
    <View>
      <Text>{nome}</Text>
    </View>
  );
};

export default PerfilCard;

const styles = StyleSheet.create({});
