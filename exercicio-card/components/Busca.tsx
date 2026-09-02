import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { COLORS } from '../palette/colors';

interface BuscaProps {
  termo: string;
  setTermo: (texto: string) => void;
}

export default function Busca({ termo, setTermo }: BuscaProps) {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"              
        label="Buscar produto"       
        value={termo}
        onChangeText={setTermo}
        style={styles.input}
        outlineColor={COLORS.destaque}
        activeOutlineColor={COLORS.primaria}
        left={<TextInput.Icon icon="magnify" />}
        placeholder="Digite o nome do produto..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
    backgroundColor: '#f5f5f5', 
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 14,
  },
});