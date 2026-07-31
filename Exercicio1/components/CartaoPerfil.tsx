import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CartaoPerfil = () => {
  return (
    <View>
      <Image source={require("../assets/icon.png")} style={styles.foto}></Image>
      <Text style={styles.titulo}>Nome</Text>
      <Text style={styles.descricao}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut iste blanditiis eligendi itaque voluptatem nihil ea dicta, recusandae debitis dolor maiores. Iure, atque odit similique corrupti officiis sunt reiciendis dignissimos.</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto}>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartaoPerfil;

const styles = StyleSheet.create({
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1425",
  },
  descricao: {
    fontSize: 12,
  },
  botao: {
    backgroundColor: "#ffb84d",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  texto: {
    color: "#1a1425",
    fontWeight: "bold",
    textAlign: "center",
  },
});
