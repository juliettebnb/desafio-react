
import React, {Component} from 'react';
import {Platform,  ScrollView,StyleSheet, Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
import { Container,  Content, Card, CardItem, Thumbnail, List, ListItem, Button, Icon, Left, Body, Right, Header, Title } from 'native-base';
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer,  createDrawerNavigator } from 'react-navigation';
import  DetailsScreen  from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';
import GenreList from './screens/GenreList';
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
      dataSource1: {},
      dataSource2: {}, 
      dataSource3: {},
    };
  }

  componentDidMount(){
    Promise.all([fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a407c85577c86430ba117c807a1e7e27'), 
    fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=a407c85577c86430ba117c807a1e7e27'), 
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=a407c85577c86430ba117c807a1e7e27&language=en-US')])
      .then(([response1, response2, response3]) => {
        return Promise.all([response1.json(), response2.json(), response3.json()])
      })
      .then(([response1, response2, response3]) => {
        console.log('response1', response1)
        console.log('response2', response2)
        console.log('response3', response3)
        this.setState({
          isLoading: false,
          dataSource1: response1.results,
          dataSource2: response2.results,
          dataSource3: response3.genres,
        })

      });

  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor:'#f0f0f0'}}>
        <ScrollView >

        <Header>
          <Left>
            <Button transparent onPress={() => navigate('Search')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Movie</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => navigate('Search')} > 
            <Icon name='search' />
          </Button>
          </Right>
        </Header>

        <View>
          <Text style={{padding:10, fontSize: 20}}>Trending Movies</Text>
          <FlatList 
            horizontal
            data={this.state.dataSource1}
            extraData={this.state}
            ///keyExtractor={(item) => item.id}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ ({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {movie: item})}>
            <Card borderRadius={10} style={{flex: 0, width: 230 }}>
              <CardItem  style={{backgroundColor:'#f9f3f3'}}>
                <Body>
                  <Image source={{uri: 'https://image.tmdb.org/t/p/w200'+ item.poster_path}} style={{height: 300, width: 200, borderRadius:10 }} />
                  <Text ellipsizeMode='tail' numberOfLines={2}
                    style={{padding:10, fontSize:15}}>{
                    `${item.original_title}
                    ${item.vote_average}`}
                  </Text>

                </Body>
              </CardItem>
            </Card>
            </TouchableOpacity>

            }

          />

        </View>
         <View>
          <Text style={{padding:10, fontSize: 20}}>Genres</Text>
          <FlatList 
            horizontal
            data={this.state.dataSource3}
            extraData={this.state}
            ///keyExtractor={(item) => item.id}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ ({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GenreList', {genre: item})}>
            <Card borderRadius={10} style={{flex: 0 }}>
              <CardItem  style={{backgroundColor:'#f9f3f3', width: 130, height:50}}>
                <Body>
                  <Text ellipsizeMode='tail' numberOfLines={2}
                    style={{padding:10, fontSize:15}}>{
                    `${item.name}\n
                    `}
                  </Text>

                </Body>
              </CardItem>
            </Card>
            </TouchableOpacity>

            }

          />
        </View> 
            {/* <List
            data={this.state.dataSource3}
            extraData={this.state}             keyExtractor={(item, index) => index.toString()}
            renderItem={ ({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MovieList', {genre: item})}>
              <ListItem  style={{backgroundColor:'#f9f3f3'}}>
                <Text>{`$(item.name)`}</Text>
              </ListItem>
            </TouchableOpacity>

            }/> */}

         
        </ScrollView>
          
      </View>



    );
  }
}

const AppNavigator = createAppContainer (
  createStackNavigator({
  Home:{ screen: HomeScreen,
  navigationOptions: () => ({
    header:null,
  })},
  Search: { screen: SearchScreen},
  Details: { screen: DetailsScreen},
  GenreList: { screen: GenreList},
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
  genre: {

    justifyContent: 'center',
    alignItems: 'center',
  }
});


