import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Search extends Component  {

    state = {
        query: "",
        dataSource: {},
    };

    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
      this.search(value);
    }

    search = query => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=a407c85577c86430ba117c807a1e7e27&language=en-US&query=${query}&page=1&include_adult=false`


      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ dataSource: responseJson.results });
          
        });
    };

    componentDidMount(){
      this.search("");
    }

    // componentDidMount(){
    //   return fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a407c85577c86430ba117c807a1e7e27')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       console.log('aquiiiii', responseJson)
  
    //       this.setState({
    //         isLoading: false,
    //         dataSource: responseJson.results,
    //       })
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
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
      const { query } = this.state;
        return (
          <View>
          
            <SearchBar
                style={styles.search}
                placeholder="Buscar..."
                onChange={this.onChange.bind(this)}
                value={this.state.value}
                containerStyle={{
                  backgroundColor: '#232b2b',
                  justifyContent: 'space-around',
                  }}
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