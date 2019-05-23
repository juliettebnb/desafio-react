import React, {Component} from 'react';
import { Text, TextInput, View, Image, FlatList,TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';
import { List, ListItem, Button, Icon, Left, Body, Right, Thumbnail} from 'native-base';
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer,  createDrawerNavigator } from 'react-navigation';
import DetailsScreen from './DetailsScreen'
//import { TouchableOpacity } from 'react-native-gesture-handler';


const base_url = 'https://api.themoviedb.org/3';
const API_KEY = 'a407c85577c86430ba117c807a1e7e27';
const search = '/search/movie?';
const query ='query=';

class SearchScreen extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      dataSource: {},
    }
  }

searchOnAPI = () => {
    let URL = base_url + search + query + this.state.searchTerm + '&api_key=' + API_KEY ;
    console.log(URL);
    fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('aquiiiii', responseJson)

      this.setState({
        dataSource: responseJson.results,
      })
    })
    .catch((error) => {
      console.error(error);
    });}


    render() {
      return(
<View>
          <View style={styles.searchBarContainer}>
              <TextInput
              placeholder = 'Buscar...'
              style = {styles.textInputSearch}
              underlineColorAndroid={'transparent'}
              onChangeText={(searchTerm) => this.setState({ searchTerm })}
              value={this.state.searchTerm}
              />
              <TouchableOpacity
              style = {styles.textSearchButton}
              onPress={() => this.searchOnAPI()}
              >
              <Icon type="FontAwesome" name="search" size={14} color="#000" />
              </TouchableOpacity>

          </View>

          <View>
          <View>
              <FlatList 
                
                data={this.state.dataSource}
                extraData={this.state}
                ///keyExtractor={(item) => item.id}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ ({item}) => 
                
                <List >
                  <ListItem avatar button={true} onPress={() => this.props.navigation.navigate('Details', {movie: item})}  >
                    
                    <Left>
                    <Thumbnail source={{uri: 'https://image.tmdb.org/t/p/w200'+ item.poster_path}}  />
                    </Left>
                    <Body>
                    <Text 
                      style={{ fontSize:15}}>{
                      `${item.original_title}
                      `}
                    </Text>
                    

                    </Body>
                    <Right>
                        <Icon active name="arrow-forward" />
                    </Right>
                  </ListItem>
                </List>
                

                }

              />
              </View> 
            </View>
</View>
      
      )}
    }


    const AppNavigator = createAppContainer (
      createStackNavigator({
      Search :{ screen: SearchScreen ,navigationOptions: () => ({
        header:null,
      })},
      Details: { screen: DetailsScreen, navigationOptions: () => ({
        header:null,
      })},
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
  searchBarContainer: {
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 2,
    marginVertical: 10,
    borderColor: 'lightgray',
    flex: 1,
    padding: 30,
  },
  textInputSearch: {
    flex: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    height: 40,
    paddingLeft: 10
  },
  textSearchButton: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 40
  }
});
    

