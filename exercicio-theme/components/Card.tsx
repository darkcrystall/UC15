import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Tema = "claro" | "escuro";

const Card = () => {
  const [tema, setTema] = useState<Tema>("claro");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarTema = async () => {
      try {
        const temaSalvo = await AsyncStorage.getItem("tema");

        if (temaSalvo === "claro" || temaSalvo === "escuro") {
          setTema(temaSalvo);
        }
      } catch (error) {
        console.error("Erro ao carregar o tema:", error);
      } finally {
        setCarregando(false);
      }
    };

    carregarTema();
  }, []);

  const trocarTema = async () => {
    const novoTema: Tema = tema === "claro" ? "escuro" : "claro";

    try {
      await AsyncStorage.setItem("tema", novoTema);
      setTema(novoTema);
    } catch (error) {
      console.error("Erro ao salvar o tema:", error);
    }
  };

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const temaEscuro = tema === "escuro";

  return (
    <View
      style={[
        styles.pagina,
        temaEscuro ? styles.paginaEscura : styles.paginaClara,
      ]}
    >
      <Text
        style={[
          styles.texto,
          temaEscuro ? styles.textoClaro : styles.textoEscuro,
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
        ducimus, iste nobis tenetur veniam beatae ullam.
      </Text>

      <TouchableOpacity
        style={[
          styles.botao,
          temaEscuro ? styles.botaoEscuro : styles.botaoClaro,
        ]}
        onPress={trocarTema}
      >
        <Text
          style={[
            styles.texto,
            temaEscuro ? styles.textoClaro : styles.textoEscuro,
          ]}
        >
          {temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 30
  },

  paginaClara: {
    backgroundColor: "#FFFFFF",
  },

  paginaEscura: {
    backgroundColor: "#121212",
  },

  texto: {
    fontSize: 18,
    lineHeight: 26,
  },

  textoClaro: {
    color: "#FFFFFF",
  },

  textoEscuro: {
    color: "#121212",
  },

  botao: {
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  botaoClaro: {
    backgroundColor: "#DDDDDD",
  },

  botaoEscuro: {
    backgroundColor: "#333333",
  },

  textoBotao: {
    fontSize: 16,
    fontWeight: "600",
  },

  carregando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
