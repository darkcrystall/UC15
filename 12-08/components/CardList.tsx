import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Card, DadosNASA } from "./Card";

const CardList = () => {
  const [dados, setDados] = useState<DadosNASA[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=H1MZHlYPGZ6U0cBSyv8Hc8eGDG1jlzKgxfqtNPtN&count=20",
    )
      .then((res) => res.json())
      .then((dados) => {
        setDados(dados.filter((item: any) => item.media_type === "image"));
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => <Card dados={item} />}
    />
  );
};

export default CardList;

const styles = StyleSheet.create({});
