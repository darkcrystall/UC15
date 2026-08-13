import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../palette/colors";

export interface DadosNASA {
  date:  string;
  title: string;
  explanation: string;
  url: string;
}

interface CardProps {
  dados: DadosNASA;
}

export function Card({ dados }: CardProps) {
  const dataFormatada = new Date(dados.date).toDateString();
  return (
    <View style={styles.card}>
      <Image source={{ uri: dados.url }} style={styles.imagem} />
      <Text style={styles.titulo}>{dados.title}</Text>
      <Text style={styles.data}>{dataFormatada}</Text>
      <Text style={styles.descricao}>
        {dados.explanation}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  imagem: {
    width: "100%",
    minHeight: 200,
    aspectRatio: 1 / 1,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  data: {
    color: COLORS.primary,
    fontSize: 14,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
  },

  descricao: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 10,
  },
});
