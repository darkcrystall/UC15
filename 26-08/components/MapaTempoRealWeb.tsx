import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// leaflet CSS is handled by the web bundler and has no TypeScript declarations.
// @ts-expect-error CSS side-effect import
import 'leaflet/dist/leaflet.css';
import { ActivityIndicator, View, StyleSheet, Platform } from 'react-native';
import * as Location from 'expo-location';

// ícone padrão do Leaflet (precisa ser importado assim no web)
import L from 'leaflet';
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapaTempoRealWeb = () => {
  const [posicao, setPosicao] = useState<[number, number] | null>(null);

  useEffect(() => {
    let inscricao: Location.LocationSubscription | null = null;

    const iniciar = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permissão de localização negada');
        return;
      }

      inscricao = await Location.watchPositionAsync(
        { timeInterval: 5000 },
        (loc) => {
          setPosicao([loc.coords.latitude, loc.coords.longitude]);
        }
      );
    };

    iniciar();
    return () => { inscricao?.remove(); };
  }, []);

  if (!posicao) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <MapContainer
      center={posicao}
      zoom={15}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posicao}>
        <Popup>Minha posição</Popup>
      </Marker>
    </MapContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapaTempoRealWeb;