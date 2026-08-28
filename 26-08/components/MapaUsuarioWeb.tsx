import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import L from "leaflet";
// @ts-expect-error - Leaflet CSS import is handled by the bundler in this web environment
import "leaflet/dist/leaflet.css";

// corrige ícone padrão do Leaflet no Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// captura clique no mapa e chama a função
const MapClickHandler = ({ onMapClick }: { onMapClick: (latlng: { lat: number; lng: number }) => void }) => {
  useMapEvent("click", (e) => onMapClick(e.latlng));
  return null;
};

const MapaUsuarioWeb = () => {
  const [localizacao, setLocalizacao] = useState<[number, number] | null>(null);
  const [pins, setPins] = useState<{ latitude: number; longitude: number }[]>([]);

  useEffect(() => {
    const pedirPermissao = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Precisamos da localização pra continuar");
        return;
      }
    };
    pedirPermissao();
    pegarPosicao();
  }, []);

  const pegarPosicao = async () => {
    try {
      const posicao = await Location.getCurrentPositionAsync({});
      console.log(`Latitude: ${posicao.coords.latitude}`);
      console.log(`Longitude: ${posicao.coords.longitude}`);
      setLocalizacao([posicao.coords.latitude, posicao.coords.longitude]);
    } catch (error) {
      alert("Erro ao obter localização");
    }
  };

  const adicionarPins = (coordenada: { lat: number; lng: number }) => {
    setPins([...pins, { latitude: coordenada.lat, longitude: coordenada.lng }]);
  };

  if (!localizacao) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <MapContainer center={localizacao} zoom={15} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onMapClick={adicionarPins} />
        {/* Marcador da posição atual */}
        <Marker position={localizacao}>
          <Popup>Você está aqui</Popup>
        </Marker>
        {/* Pins adicionados */}
        {pins.map((pin, index) => (
          <Marker key={index} position={[pin.latitude, pin.longitude]}>
            <Popup>Pin: {index + 1}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default MapaUsuarioWeb;