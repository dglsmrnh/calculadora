import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import iconeCalculadora from './assets/calc.png';

export default function App() {
  const [campo1, setCampo1] = useState('0');
  const [campo2, setCampo2] = useState('0');
  const [resultado, setResultado] = useState('0');

  const operacoes = [
    { nome: 'Somar', operacao: somar, icone: 'plus' },
    { nome: 'Subtrair', operacao: subtrair, icone: 'minus' },
    { nome: 'Multiplicar', operacao: multiplicar, icone: 'x' },
    { nome: 'Dividir', operacao: dividir, icone: 'divide' },
    { nome: 'Exponenciar', operacao: exponenciacao, icone: 'chevron-up' }
  ];

  function somar() {
    if (campo1 === '' || campo2 === '') {
      Alert.alert('Preencha os 2 campos!');
    } else {
      let v1 = Number.parseFloat(campo1.replace(',', '.'));
      let v2 = Number.parseFloat(campo2.replace(',', '.'));
      setResultado((v1 + v2).toString());
    }
  }

  function subtrair() {
    if (campo1 === '' || campo2 === '') {
      Alert.alert('Preencha os 2 campos!');
    } else {
      let v1 = Number.parseFloat(campo1.replace(',', '.'));
      let v2 = Number.parseFloat(campo2.replace(',', '.'));
      setResultado((v1 - v2).toString());
    }
  }

  function multiplicar() {
    if (campo1 === '' || campo2 === '') {
      Alert.alert('Preencha os 2 campos!');
    } else {
      let v1 = Number.parseFloat(campo1.replace(',', '.'));
      let v2 = Number.parseFloat(campo2.replace(',', '.'));
      setResultado((v1 * v2).toString());
    }
  }

  function dividir() {
    if (campo1 === '' || campo2 === '') {
      Alert.alert('Preencha os 2 campos!');
    } else if (campo2 === '0') {
      Alert.alert('Não é possível dividir por zero!');
    } else {
      let v1 = Number.parseFloat(campo1.replace(',', '.'));
      let v2 = Number.parseFloat(campo2.replace(',', '.'));
      setResultado((v1 / v2).toString());
    }
  }

  function exponenciacao() {
    if (campo1 === '' || campo2 === '') {
      Alert.alert('Preencha os 2 campos!');
    } else {
      let v1 = Number.parseFloat(campo1.replace(',', '.'));
      let v2 = Number.parseFloat(campo2.replace(',', '.'));
      setResultado((Math.pow(v1, v2)).toString());
    }
  }

  function limparResultado() {
    setCampo1('0');
    setCampo2('0');
    setResultado('0');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de pobre</Text>
      <Image source={iconeCalculadora} style={styles.iconeCalculadora} />
      <Text style={styles.labelCampo}>Digite um valor:</Text>
      <TextInput
        keyboardType='decimal-pad'
        onChangeText={(text) => setCampo1(text)}
        style={styles.campo}
        value={campo1}
      />
      <Text style={styles.labelCampo}>Digite outro valor:</Text>
      <TextInput 
        keyboardType='decimal-pad'
        onChangeText={(text) => setCampo2(text)}
        style={styles.campo}
        value={campo2}
      />
      <View style={styles.botoesContainer}>
        {operacoes.map((item, index) => (
            <TouchableOpacity key={index} style={styles.botaoOperacao} onPress={item.operacao}>
              <Feather name={item.icone} size={32} color="white" />
            </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.botaoLimpar} onPress={limparResultado}>
          <Feather name="refresh-cw" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.labelResultado}>Resultado: {resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  iconeCalculadora: {
    width: 180,
    height: 180,
    marginVertical: 20,
  },
  labelResultado: {
    fontSize: 30,
    color: 'blue',
    marginTop: 30,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  botaoOperacao: {
    width: 50,
    height: 50,
    backgroundColor: '#1dc2a1',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botaoLimpar: {
    width: 50,
    height: 50,
    backgroundColor: '#ff5733',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  campo: {
    width: '50%',
    height: 40,
    fontSize: 20,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    textAlign: 'right',
    marginTop: 10,
  },
  labelCampo: {
    fontSize: 25,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#10a5b0',
    textAlign: 'center',
    fontWeight: 'bold',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
});