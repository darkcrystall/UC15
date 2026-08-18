import { View, StyleSheet, Image, Button, TouchableOpacity, Text } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Busca")}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    margin: 50,
  },
  botao: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#222",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});