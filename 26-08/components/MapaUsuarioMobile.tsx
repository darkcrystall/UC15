import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker, Region } from "react-native-maps";

const MapaUsuarioMobile = () => {
  const [localização, setLocalizacao] = useState<Region>();
  // array de pins mara rastrear as marcações
  const [pins, setPins] = useState<{ latitude: number; longitude: number }[]>(
    []
  );
  // função que pede permissão
  useEffect(() => {
    const pedirPermissao = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Precisamos da localização pra continuar");
        return;
      }
    };
    pedirPermissao();
    pegarPosicao();
  }, []);
  const pegarPosicao = async () => {
    const posicao = await Location.getCurrentPositionAsync({});
    console.log(`Latitude:  ${posicao.coords.latitude}`);
    console.log(`Longitude:  ${posicao.coords.longitude}`);
    setLocalizacao({
      latitude: posicao.coords.latitude,
      longitude: posicao.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };
  if (!localização) {
    return (
      <ActivityIndicator
        size={"large"}
        style={styles.loading}
      ></ActivityIndicator>
    );
  }
  const adicionarPins = (coordenada: {
    latitude: number;
    longitude: number;
  }) => {
    setPins([...pins, coordenada]);
  };
  return (
    // <View>
    //   <Button title="Pegar posição" onPress={() => pegarPosicao} />
    // </View>
    <MapView
      style={styles.mapa}
      initialRegion={localização}
      showsUserLocation={true}
      onPress={(toque) => {
        adicionarPins(toque.nativeEvent.coordinate);
      }}
    >
      {pins.map((pin, index) => (
        <Marker key={index} coordinate={pin} title={`Pin: ${index + 1}`} />
      ))}
      <Marker
        coordinate={{
          latitude: localização.latitude,
          longitude: localização.longitude,
        }}
        title="Você está aqui"
      />
    </MapView>
  );
};

export default MapaUsuarioMobile;

const styles = StyleSheet.create({
  mapa: { flex: 1, width: "100%" },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
