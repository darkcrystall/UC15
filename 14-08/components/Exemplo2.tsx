import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const Exemplo2 = () => {
    // useEffect com o array de dependências vazio chama a função uma única vez
    useEffect(() => {
        console.log("O componente foi renderizado");
      }, []);
  return (
    <View>
      <Text>Componente renderizado</Text>
    </View>
  );
};

export default Exemplo2;

const styles = StyleSheet.create({});
