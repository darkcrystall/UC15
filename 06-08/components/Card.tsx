import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface CardProps {
    nome: string,
    idade: number
}

const Card = ({nome, idade}: CardProps) => {
  return (
    <View>
      <Text style={styles.texto}>{nome} {idade}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    color: "orange",
    fontWeight: "black",
  },
});
