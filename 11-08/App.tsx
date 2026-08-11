import { StyleSheet, Text, View } from 'react-native';
import ListaUsuarios from './components/ListaUsuarios';
import ListaProdutos from './components/ListaProdutos';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaProdutos></ListaProdutos>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
