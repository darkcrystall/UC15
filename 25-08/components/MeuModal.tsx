import { StyleSheet, View, Modal, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const MeuModal = () => {
  const [visivel, setVisivel] = useState<boolean>(false);

  return (
    <View>
      <Modal
        visible={visivel}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVisivel(false)}
      >
        <View style={styles.fundo}>
          <View style={styles.caixa}>
            <Text>Conteúdo do modal aqui</Text>
            <TouchableOpacity onPress={() => setVisivel(false)}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setVisivel(true)}>
        <Text>Abrir modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MeuModal;

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "blue",
    padding: 20,
  },
  caixa: {
    backgroundColor: "red",
  },
});
