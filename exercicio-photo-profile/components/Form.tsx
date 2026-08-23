import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const FotoPerfil = () => {
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState<string | null>(null);

  const escolherFoto = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  };
  const tirarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "É necessário permitir o acesso à câmera.",
      );
      return;
    }
    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome de usuário..."
        value={nome}
        onChangeText={setNome}
      />
      <View style={styles.previewContainer}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.foto} />
        ) : (
          <View style={styles.previewVazio} />
        )}
      </View>
      <TouchableOpacity style={styles.botao} onPress={tirarFoto}>
        <Text style={styles.textoBotao}>Tirar foto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={escolherFoto}>
        <Text style={styles.textoBotao}>Escolher da galeria</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botaoCadastrar}
        onPress={() => {
          if (!nome.trim()) {
            Alert.alert("Atenção", "Digite seu nome de usuário.");
            return;
          }
          Alert.alert(
            "Perfil cadastrado",
            `Perfil de ${nome} cadastrado com sucesso!`,
          );
        }}
      >
        <Text style={styles.textoBotao}>Cadastrar perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FotoPerfil;

const TAMANHO_FOTO = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },

  previewContainer: {
    marginVertical: 10,
  },

  foto: {
    width: TAMANHO_FOTO,
    height: TAMANHO_FOTO,
    borderRadius: TAMANHO_FOTO / 2,
  },

  previewVazio: {
    width: TAMANHO_FOTO,
    height: TAMANHO_FOTO,
    borderRadius: TAMANHO_FOTO / 2,
    backgroundColor: "#ccc",
  },

  botao: {
    width: "100%",
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#444",
    alignItems: "center",
  },

  botaoCadastrar: {
    width: "100%",
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#2e7d32",
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});