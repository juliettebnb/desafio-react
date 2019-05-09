
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { SearchBar, Header, StatusBar } from 'react-native-elements';
import { Dimensions } from 'react-native';
import Carousel from './components/Carousel';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import  DetailsScreen  from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';

import Navigator from './components/Navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class HomeScreen extends React.Component {


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View >
        <Header style={styles.header}
          leftComponent={{ icon: 'menu', 
                            color: '#fff',
                            onPress: () => navigate('Details') 
                          }}
          centerComponent={{ text: 'MOVIE',
                             style: { color: '#fff' } }}
          rightComponent={{ icon: 'search', 
                            color: '#fff',
                            onPress: () => navigate('Search')}}

          containerStyle={{
                            backgroundColor: '#232b2b',
                            justifyContent: 'space-around',
                    }}
        />
        
      

      </View>



    );
  }
}

const AppNavigator = createAppContainer (
  createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
},
  })
);

export default AppNavigator;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#353839'
  },
});


