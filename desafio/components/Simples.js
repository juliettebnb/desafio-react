import React from 'react';
import {  Text } from 'react-native';
import Standard from '../style/Standard'


export default function(props){
    return <Text style={Standard.ex}>{props.texto}</Text>
}