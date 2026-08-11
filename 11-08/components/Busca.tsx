import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const Busca = () => {
    const [termo, setTermo] = useState<string>("")
  return (
    <View>
        <TextInput placeholder='Digite um termo para pesquisar...'>{termo}</TextInput>
        <TouchableOpacity onPress={() => setTermo}></TouchableOpacity>
    </View>
  )
}

export default Busca

const styles = StyleSheet.create({})