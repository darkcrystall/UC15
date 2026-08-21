import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const EscolherFoto = () => {
  const [foto, setFoto] = useState<string>("");
  const [fotos, setFotos] = useState<string[]>([]);
  const escolherDaGaleria = async () => {
    // launchImageLibraryAsync() é um método assíncrono que abre a galeria para o usuário selecionar uma imagem
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], // tipo de mídia aceita
      allowsMultipleSelection: true, // permite várias fotos
      allowsEditing: false, // permite recortar a imagem antes de enviar
      selectionLimit: 5, // quantas fotos pode ser selecionadas
      aspect: [1, 1], // proporção de recorte, quando allowsEditing é true
      quality: 0.8, // qualidade da imagem, o máximo é 1 e quanto mais baixo, menor o tamanho do arquivo
    });
    // se confirmar
    if (!resultado.canceled) {
      //   setFoto(resultado.assets[0].uri); // o caminho da imagem escolhida, que pode ser colocada no source de uma Image
      const uris = resultado.assets.map((item) => item.uri);
      setFotos(uris);
    }
  };
  const tirarFoto = async () => {
    // função assíncrona do ImagePicker que pede permissão de câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status != "granted") {
      Alert.alert("Permissão é necessária");
      return;
    }
    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
    });
    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={escolherDaGaleria}>
        <Text>Escolher imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={tirarFoto}>
        <Text>Tirar imagem</Text>
      </TouchableOpacity>
      {/* apenas mostra se houver imagem */}
      {foto && <Image style={styles.foto} source={{ uri: foto }} />}
      {fotos.length > 0 && (
        <FlatList
          data={fotos}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Image style={styles.foto} source={{ uri: item }} />
          )}
        />
      )}
    </View>
  );
};

export default EscolherFoto;

const styles = StyleSheet.create({
  foto: {
    width: 50,
    height: 50,
  },
});