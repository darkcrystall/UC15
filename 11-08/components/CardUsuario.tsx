import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CardUsuarioProps {
    id: number,
    nome: string,
    email: string
}

const CardUsuario = ({id, nome, email}: CardUsuarioProps) => {
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{nome}</Text>
      <Text>{email}</Text>
    </View>
  )
}

export default CardUsuario

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        padding: 5,
        borderRadius: 6
    }
})