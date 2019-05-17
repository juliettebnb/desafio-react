import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Search extends Component  {

    state = {
        search: "",
        dataSource: {},
    };

    // updateSearch = search => {
    //   this.setState({ search });
    //   return fetch(`https://api.themoviedb.org/3/search/movie?api_key=a407c85577c86430ba117c807a1e7e27`,{
    //     method: "GET",
    //     params: {
    //       query: this.state.search,
    //       page: '1',

    //     }
    //   })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //       console.log('buscaaaaaaaa', responseJson)
    //       this.setState({ dataSource: responseJson.results });
        
    //   });
    // };





        renderSeparator = () => {
          return (
            <View
              style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '14%',
              }}
            />
          );
        };

    render() {
      const { search } = this.state;
        return (
          <View>
          
            {/* <SearchBar
                style={styles.search}
                placeholder="Buscar..."
                onChangeText={this.updateSearch}
                value={search}
                containerStyle={{
                  backgroundColor: '#232b2b',
                  justifyContent: 'space-around',
                  }}
            />  */}

            <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.updateSearch}
            value={this.state.search}
            />
            <Button 
            />


            <FlatList
            data={this.state.dataSource2}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item })  =>  (
              <ListItem 
              leftAvatar={{source: {uri:'https://image.tmdb.org/t/p/w200'+ item.poster_path }}}
              title={`${item.original_title}`}
              />
            )}
            ItemSeparatorComponent={this.renderSeparator}

            />

          </View>
          );
        }
    }

    const styles = StyleSheet.create({
        search: {
          marginTop: 50,
        },
      });