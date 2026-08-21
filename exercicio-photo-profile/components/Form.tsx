import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const Form = () => {
  const [nome, setNome] = useState<string>("");
  const [foto, setFoto] = useState<string>("");
  const escolherFoto = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!resultado.canceled) {
      const uri = resultado.assets[0].uri;
      setFoto(uri);
    }
  };
  const tirarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status != "granted") {
      Alert.alert("Permissão é necessária");
      return;
    }
    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!resultado.canceled) {
      const uri = resultado.assets[0].uri;
      setFoto(uri);
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Digite seu nome de usuário..."
        onChangeText={setNome}
      >
        {nome}
      </TextInput>
      <TouchableOpacity onPress={escolherFoto}>
        <Text>Escolher da galeria</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Tirar foto</Text>
      </TouchableOpacity>
      {foto && <Image style={styles.foto} source={{ uri: foto }} />}
      <TouchableOpacity>
        <Text>Cadastrar perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  foto: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
});