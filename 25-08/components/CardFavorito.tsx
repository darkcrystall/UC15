import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CardFavoritoProps {
    favorito: string
    deletar: () => Promise<void>
}

const CardFavorito = ({favorito, deletar} : CardFavoritoProps) => {
  return (
    <View>
        <Text>{favorito}</Text>
        <TouchableOpacity onPress={deletar}>Deletar favorito</TouchableOpacity>
    </View>
  )
}

export default CardFavorito

const styles = StyleSheet.create({})