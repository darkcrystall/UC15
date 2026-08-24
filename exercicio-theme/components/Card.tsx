import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Card = () => {
  const [tema, setTema] = useState<string>("claro");
  useEffect(() => {
    const pegarTema = async () => {
      const tema = await AsyncStorage.getItem("tema");
      if (tema) {
        setTema(tema);
      }
    };
    pegarTema();
  }, []);
  const trocarTema = async () => {
    const temaAtual = tema === "claro" ? "escuro" : "claro";
    await AsyncStorage.setItem(temaAtual, tema);
  };
  return (
    <View
      style={[
        styles.pagina,
        tema === "escuro" ? styles.paginaEscura : styles.paginaClara,
      ]}
    >
      <Text style={tema === "escuro" ? styles.textoClaro : styles.textoEscuro}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        ducimus, iste nobis tenetur veniam beatae ullam? Veniam nam maxime animi
        sequi quasi beatae fugit labore molestias adipisci odio, accusamus
        assumenda.
      </Text>
      <TouchableOpacity style={[
        styles.botao,
        tema === "escuro" ? styles.botaoEscuro : styles.botaoClaro,
      ]} onPress={trocarTema}>
        <Text>{tema === "escuro" ? "Tema claro" : "Tema escuro"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  pagina: {
    height: "100%",
  },
  paginaClara: {
    backgroundColor: "white",
  },
  paginaEscura: {
    backgroundColor: "black",
  },
  botao: {
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoClaro: {
    backgroundColor: "#ccc",
  },
  botaoEscuro: {
    backgroundColor: "#eee",
  },
  textoClaro: {
    color: "black",
  },
  textoEscuro: {},
});