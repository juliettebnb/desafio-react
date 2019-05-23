import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
import { Container,  Content, Card, ListItem, List, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class GenreList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          dataSource: {},
        };
      }
    componentDidMount(){

        console.log('parammmms', this.props.navigation.state.params)
        let URL = `https://api.themoviedb.org/3/discover/movie?api_key=a407c85577c86430ba117c807a1e7e27&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=` + this.props.navigation.state.params.genre.id ;
        return fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('aquiiiii', responseJson)

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        })
      })
      .catch((error) => {
        console.error(error);
      });
    }


  render() {

    return (
      <View>


      
      <View>
          <Text style={{padding:10, fontSize: 20}}>{`${this.props.navigation.state.params.genre.name}`}</Text>
          <FlatList 
            data={this.state.dataSource}
            extraData={this.state}
            ///keyExtractor={(item) => item.id}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ ({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {movie: item})}>
            <List >
              <ListItem  avatar button={true} onPress={() => this.props.navigation.navigate('Details', {movie: item})} >
                <Left>
                  < Thumbnail source={{uri: 'https://image.tmdb.org/t/p/w200'+ item.poster_path}} />
                </Left>
                  <Body>
                  <Text >{
                    `${item.original_title}
                   `}
                  </Text>

                </Body>
                <Right>
                        <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
            </TouchableOpacity>

            }

          />

        </View>

        </View>
    );
  }
}