
import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View, Button} from 'react-native';
import { Icon } from 'native-base'

const styles = require('./SearchBarStyle');

export default class SearchBar extends Component {
    render() {
        return(

            <View style={styles.searchBarContainer}>
                <TextInput
                placeholder = 'Buscar...'
                style = {styles.textInputSearch}
                //underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity
                style = {styles.textSearchButton}
                >
                <Icon type="FontAwesome" name="search" size={16} color="#000" />
                </TouchableOpacity>

            </View>
        
        )}
}