import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const Exemplo3 = () => {
  const [contador, setContador] = useState<number>(0);
  const [outroContador, setOutroContador] = useState<number>(0)
  useEffect(() => {
    console.log("O componente foi renderizado");
  }, [contador]);
  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Text>Outro contador: {outroContador}</Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <Text> Clique para mudar o contador</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setContador(outroContador)}>
        <Text> Clique para mudar o outro contador</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exemplo3;

const styles = StyleSheet.create({});
