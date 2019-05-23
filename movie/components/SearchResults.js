// import React, {Component} from 'react';
// import { Dimensions } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import {View, TouchableOpacity, Text} from 'react-native';
// import {connect} from 'react-redux';

// const styles = require('./SearchResultsStyle');

// export default class SearchResults extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <View style={styles.searchResultsContainer}>
//         {this.props.results.map((result, key) => (<Text key={key}>{result.original_title}</Text>))}
//       </View>
//     )
//   }
// }

// // function mapStateToProps(state) {
// //   return {
// //     results: state.results
// //   };
// // }

// //export default connect(mapStateToProps, null)(SearchResults);