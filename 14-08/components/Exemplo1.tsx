import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const Exemplo1 = () => {
  const [contador, setContador] = useState<number>(0);
  useEffect(() => {
    console.log("O componente foi renderizado");
  });
  return (
    <View>
      <Text>Renderizações: {contador}</Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <Text> Clique para renderizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exemplo1;

const styles = StyleSheet.create({});
