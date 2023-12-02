import React from 'react'
import {View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-web'
import { styles } from '../styles'

export default function corVolt({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>Resistor Calculator</Text>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Text style={styles.normalText}>Bem-vindo ao conversor de resistores!</Text>
      <br></br>
      <Text style={styles.normalText}>Escolha sua maneira de conversão!</Text>
      <br></br>
      <br></br>
      <br></br>
            <TouchableOpacity onPress={()=> navigation.navigate('voltCor')} style={styles.button}>
                Cores para valores
            </TouchableOpacity>
            <br></br>
            <TouchableOpacity onPress={()=> navigation.navigate('corVolto')} style={styles.button}>
            Valores para cores
            </TouchableOpacity>
        </View>
    )
}