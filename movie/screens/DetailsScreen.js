import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
import { Container,  Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class DetailsScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const sinopse = '   Sinopse: '
    console.log('copaa',this.props)
    return (
      <View>
      
        <View style={{ flexDirection: 'row' , alignItems: "flex-start", justifyContent: "flex-start", padding: 10 }}>

          <Image source={{uri: 'https://image.tmdb.org/t/p/w200'+ params.movie.poster_path}} style={{height: 300, width: 200, borderRadius:10, marginTop:10 }} />
          <View style={{ width: 0, flexGrow: 1, flex: 1,}}>
            <Text style={{fontWeight:'bold', fontSize:20}}>{sinopse}</Text>
            <Text style={{padding: 10, fontSize: 15}} >{` ${params.movie.overview} ${params.movie.release_date}`}</Text>
          </View>
        </View>
        <View>
          
        </View>

        </View>
    );
  }
}