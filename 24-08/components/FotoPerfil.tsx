import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

const CHAVE_FOTO = "@app:foto_perfil";

const FotoPerfil = () => {
  const [foto, setFoto] = useState<string>();
  useEffect(() => {
    const carregar = async () => {
      const salvo = await AsyncStorage.getItem(CHAVE_FOTO);
      if (salvo) {
        setFoto(salvo);
      }
    };
    carregar();
  }, []);
  const escolherFoto = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });
    // se escolher
    if (!resultado.canceled) {
      const uri = resultado.assets[0].uri; // pega a uri da foto
      setFoto(uri);
      await AsyncStorage.setItem(CHAVE_FOTO, uri); // salva o caminho da imagem
    }
  };
  return (
    <View style={styles.container}>
      {foto ? (
        <Image source={{ uri: foto }} style={styles.foto} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <TouchableOpacity style={styles.botao} onPress={escolherFoto}>
        <Text style={styles.botaoTexto}>Trocar foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FotoPerfil;

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: 14 },
  foto: { width: 120, height: 120, borderRadius: 60 },
  placeholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#eee",
  },
  botao: { backgroundColor: "#4ade9e", padding: 10, borderRadius: 10 },
  botaoTexto: { fontWeight: "bold" },
});