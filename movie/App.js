
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
import { Container,  Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { ListItem, SearchBar, Header, StatusBar} from 'react-native-elements'
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer,  createDrawerNavigator } from 'react-navigation';
import  DetailsScreen  from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';



const KEY = 'a407c85577c86430ba117c807a1e7e27'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: {}
    };
  }

  componentDidMount(){
    return fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a407c85577c86430ba117c807a1e7e27')
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
    const {navigate} = this.props.navigation;
    return (
      <View >
        <Header style={styles.header}
          leftComponent={{ icon: 'menu', 
                            color: '#fff',
                            onPress: () => this.props.navigation.openDrawer(), 
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
        {/* <View>
          
          <FlatList 
            data={this.state.dataSource}
            extraData={this.state}
            renderItem={({item}) => <Text>{item.original_title},
            {item.release_date}</Text>} 
            
            />
        </View> */}
        <View>
          <Text>Trending</Text>
          <Image source={{uri: 'https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg' }} style={{height: 200, width: 200, flex: 1}} />
          <FlatList 
            horizontal
            data={this.state.dataSource}
            extraData={this.state}
            ///keyExtractor={(item) => item.id}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ ({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {movie: item})}>
            <Card style={{flex: 0}}>
              <CardItem>
                <Body>
                  <Image source={{uri: require('assets/test.jpg')}} />
                  <Image source={{uri:'https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg' }} style={{height: 200, width: 200, flex: 1}} />
                  <Text>
                    {item.original_title}
                  </Text>
                </Body>
              </CardItem>
            </Card>
            </TouchableOpacity>

            }

          />
        </View>
      

      </View>



    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

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


