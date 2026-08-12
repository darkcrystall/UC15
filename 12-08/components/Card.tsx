import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'

interface CardProps {
    foto: ImageSourcePropType,
    nome: string
}

function Card ({ foto, nome}: CardProps ) {
  return (
    <View>
        <Text>{nome}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})