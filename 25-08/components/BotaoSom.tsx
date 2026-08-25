import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAudioPlayer } from "expo-audio";

const BotaoSom = () => {
  const player = useAudioPlayer(require("linkdoaudio"));
  const tocar = () => {
    player.seekTo(0); // começa no início do áudio
    player.play(); // toca o som
  };
  return (
    <View>
      <TouchableOpacity onPress={tocar}>
        <Text>Tocar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoSom;

const styles = StyleSheet.create({});
