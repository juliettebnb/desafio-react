import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Dimensions } from 'react-native';

export default class Search extends Component  {
    state = {
        search: '',
    };
    updateSearch = search => {
        this.setState({ search })
    }

    render() {
        const { search } = this.state;
        return (
            <SearchBar
                style={styles.search}
                placeholder="Buscar..."
                onChangeText={this.updateSearch}
                value={search}
                containerStyle={{
                  backgroundColor: '#232b2b',
                  justifyContent: 'space-around',
                  
          }}
            />
          );
        }
    }

    const styles = StyleSheet.create({
        search: {
          marginTop: 50,
        },
      });