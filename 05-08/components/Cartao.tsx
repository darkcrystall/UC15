import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Cartao = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.texto, styles.box]}>Cartao</Text>
      <Text style={[styles.texto, styles.box]}>Cartao</Text>
      <Text style={[styles.texto, styles.box]}>Cartao</Text>
    </View>
  );
};

export default Cartao;

const styles = StyleSheet.create({
  texto: {
    color: "orange",
    fontSize: 14,
  },
  box: {
    backgroundColor: "grey",
    padding: 18,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    padding: 10
  },
});
