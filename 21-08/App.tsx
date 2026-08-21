import { StyleSheet, Text, View } from 'react-native';
import EscolherFoto from './components/EscolherFoto';

export default function App() {
  return (
    <View style={styles.container}>
      <EscolherFoto></EscolherFoto>
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
