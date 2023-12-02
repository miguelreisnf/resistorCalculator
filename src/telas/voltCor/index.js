import React, { useState } from 'react'
import {View, Text} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { styles } from '../styles'
import Util from './Classe/Util'

export default function corVolt(){

    const [selectedValue1, setSelectedValue1] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);
    const [selectedValue3, setSelectedValue3] = useState(null);
    const [resistencia, setResistencia] = useState("");

    const placeholder = {
        label: 'Selecione uma opção...',
        value: null,
        color: '#9EA0A4',
      };

    const data = [
        { label: 'Preto', value: 'preto' },
        { label: 'Marrom', value: 'marrom' },
        { label: 'Vermelho', value: 'vermelho' },
        { label: 'Laranja', value: 'laranja' },
        { label: 'Amarelo', value: 'amarelo' },
        { label: 'Verde', value: 'verde' },
        { label: 'Azul', value: 'azul' },
        { label: 'Violeta', value: 'violeta' },
        { label: 'Cinza', value: 'cinza' },
        { label: 'Branco', value: 'branco' },
      ];

    let util = new Util()
    function resis(){
        let a = util.corPravalor(selectedValue1,selectedValue2,selectedValue3)
        setResistencia(a)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>Transforme de cor para resistor</Text>
            <br></br>
            <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(value) => setSelectedValue1(value)}
            items={data}
            />
            <br></br>
            <Text style={styles.normalText}>Faixa 1 cor: {selectedValue1}</Text>
            <br></br>
            <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(value) => setSelectedValue2(value)}
            items={data}
            />
            <br></br>
            <Text style={styles.normalText}>Faixa 2 cor: {selectedValue2}</Text>
            <br></br>
            <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(value) => setSelectedValue3(value)}
            items={data}
            onPress={resis}
            />
            <br></br>
            <Text style={styles.normalText}>Faixa 3 cor: {selectedValue3}</Text>
            <br></br><br></br>
            <Text style={styles.eventName}>Resistencia de: {resistencia} Ohms</Text>
        </View>
    )
}

