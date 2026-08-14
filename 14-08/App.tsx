import { StyleSheet, Text, View } from 'react-native';
import Exemplo1 from './components/Exemplo1';
import Exemplo2 from './components/Exemplo2';
import Exemplo3 from './components/Exemplo3';
import ListaUsuarios from './components/ListaUsuarios';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaUsuarios></ListaUsuarios>
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
