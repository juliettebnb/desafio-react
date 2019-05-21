import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';
import {  ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default class Search extends Component  {

    state = {
        search: "",
        dataSource: {},
    };



    render() {
      const { search } = this.state;
        return (
          <View style={styles.container}>
            <SearchBar />
            <SearchResults />
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
      });