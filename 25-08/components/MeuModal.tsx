import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAudioPlayer } from "expo-audio";

const MeuModal = () => {
  const [visivel, setVisivel] = useState(false);

  const player = useAudioPlayer(require("../assets/music.mp3"));

  useEffect(() => {
    if (visivel) {
      player.seekTo(0);
      player.play();
    } else {
      player.pause();
      player.seekTo(0);
    }
  }, [visivel]);

  const fecharModal = () => {
    setVisivel(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoAbrir}
        onPress={() => setVisivel(true)}
      >
        <Text style={styles.textoBotao}>Abrir modal</Text>
      </TouchableOpacity>

      <Modal
        visible={visivel}
        animationType="fade"
        transparent
        onRequestClose={fecharModal}
      >
        <View style={styles.fundo}>
          <View style={styles.caixa}>
            <Image source={require("../assets/swan.gif")} style={styles.gif} />
            <TouchableOpacity style={styles.botaoFechar} onPress={fecharModal}>
              <Text style={styles.textoBotao}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MeuModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },

  caixa: {
    height: 300,
    width: 300,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
  },

  gif: {
    width: 300,
    height: 200,
    marginBottom: 16,
    borderRadius: 10
  },

  botaoAbrir: {
    backgroundColor: "#3498db",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },

  botaoFechar: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
