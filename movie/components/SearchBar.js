
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
// import { Container,  Content, Card, CardItem, Thumbnail, List, ListItem, Button, Icon, Left, 
//   Body, Right, Header, Title } from 'native-base';
// // import {connect} from 'react-redux';
// // import {searchResults} from "../actions";

// const styles = require('./SearchBarStyle');

// const base_url = 'https://api.themoviedb.org/3';
// const API_KEY = 'a407c85577c86430ba117c807a1e7e27';
// const search = '/search/movie?';
// const query ='query=';




// export default class SearchBar extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           searchTerm: '',
//           dataSource: {},
//         }
//       }

//     searchOnAPI = () => {
//         let URL = base_url + search + query + this.state.searchTerm + '&api_key=' + API_KEY ;
//         console.log(URL);
//         fetch(URL)
//         .then((response) => response.json())
        

          
//        }
      

//     render() {
//         return(
// <View>
//             <View style={styles.searchBarContainer}>
//                 <TextInput
//                 placeholder = 'Buscar...'
//                 style = {styles.textInputSearch}
//                 underlineColorAndroid={'transparent'}
//                 onChangeText={(searchTerm) => this.setState({ searchTerm })}
//                 value={this.state.searchTerm}
//                 />
//                 <TouchableOpacity
//                 style = {styles.textSearchButton}
//                 onPress={() => this.searchOnAPI()}
//                 >
//                 <Icon type="FontAwesome" name="search" size={14} color="#000" />
//                 </TouchableOpacity>

//             </View>

//             <View>
//             <View>
//                 <FlatList 
                  
//                   data={this.state.dataSource}
//                   extraData={this.state}
//                   ///keyExtractor={(item) => item.id}
//                   keyExtractor={(item, index) => index.toString()}
//                   renderItem={ ({item}) => 
//                   <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {movie: item})}>
//                   <Card borderRadius={10} style={{flex: 0 }}>
//                     <CardItem  style={{backgroundColor:'#f9f3f3', width: 130, height:50}}>
//                       <Body>
//                       <Image source={{uri: 'https://image.tmdb.org/t/p/w200'+ item.poster_path}} style={{height: 75, width: 50, borderRadius:10 }} />
//                       <Text ellipsizeMode='tail' numberOfLines={2}
//                         style={{padding:10, fontSize:15}}>{
//                         `${item.original_title}
//                         `}
//                       </Text>

//                       </Body>
//                     </CardItem>
//                   </Card>
//                   </TouchableOpacity>

//                   }

//                 />
//         </View> 
//             </View>
//   </View>
        
//         )}
// }

// //export default connect(null, {searchResults})(SearchBar);