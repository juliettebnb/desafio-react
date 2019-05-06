
import { StyleSheet, Platform, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Mult'
import React, {Component} from 'react'
import Menu from './Menu'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Simples texto='flexx'/>
        <ParImpar numero={31}/>
        <Inverter texto='React Nativo'/>
        <MegaSena numeros={6} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f20: {
    fontSize: 40
  }
});
