import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";

const Teste = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => console.log("tocado")}
        icon="account"
        dark={false}
      >
        Clique
      </Button>
      <Button
        icon="camera"
        mode="contained-tonal"
        onPress={() => console.log("clicado")}
      >
        Press me
      </Button>

      <TextInput
        label="e-mail"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default Teste;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    margin: 20
  },
});
