import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../palette/colors";

interface CartaoPerfilProps {
  nome: string;
  descricao: string;
  foto: ImageSourcePropType;
  onSeguir: () => void;
};

export default function CartaoPerfil({
  nome,
  descricao,
  foto,
  onSeguir,
}: CartaoPerfilProps) {
  return (
    <View style={styles.card}>
      <Image source={foto} style={styles.foto} resizeMode="cover"/>

      <Text style={styles.titulo}>{nome}</Text>

      <Text style={styles.descricao}>{descricao}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={onSeguir}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.creme,
    borderRadius: 24,
    padding: 24,
    gap: 20,
    alignItems: "center",
    minHeight: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,

    elevation: 6,
  },

  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: COLORS.branco,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.texto,
  },

  descricao: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },

  botao: {
    backgroundColor: COLORS.vermelhoEscuro,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 999,
  },

  botaoPressionado: {
    opacity: 0.8,
  },

  textoBotao: {
    color: COLORS.branco,
    fontWeight: "bold",
    textAlign: "center",
  },
});
