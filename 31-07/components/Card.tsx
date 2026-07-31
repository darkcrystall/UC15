import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button } from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
      {/* imagem que está no projeto */}
      <Image source={require("../assets/favicon.png")} />
      {/* imagem que está na internet*/}
      {/* <Image source={{ uri: }} style={styles.foto}/> */}
      <Text
        style={styles.titulo}
        numberOfLines={1}
        ellipsizeMode="head"
        onPress={() => alert("clicado")}
        selectable={true}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum libero
        est laudantium quibusdam! Consectetur non quaerat corrupti magni quas
        exercitationem voluptates ut, ducimus, a eveniet odit explicabo,
        architecto nemo minus!
      </Text>
      <Button title="Clicar" onPress={() => alert("clicado")} />
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>Clique</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 10,
    margin: 5,
    maxWidth: 200,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1425",
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  botao: {
    backgroundColor: '#ffb84d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  texto: {
    color: '#1a1425',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
