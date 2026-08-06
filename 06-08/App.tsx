import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Contador from './components/Contador';
import TrocaTexto from './components/TrocaTexto';
import CampoNome from './components/CampoNome';
import Somar from './components/Somar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Card nome='nome' idade={10}/> */}
      {/* <Contador></Contador> */}
      {/* <TrocaTexto></TrocaTexto> */}
      {/* <CampoNome></CampoNome> */}
      <Somar></Somar>
      <StatusBar style="auto" />
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
