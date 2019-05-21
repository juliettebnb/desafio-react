import React, {Component} from 'react';
import {Text} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class SearchResults extends Component {

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
        return(
            <FlatList
            // data={this.state.dataSource2}
            // extraData={this.state}
            // keyExtractor={(item, index) => index.toString()}
            // renderItem={({ item })  =>  (
            //   <ListItem 
            //   leftAvatar={{source: {uri:'https://image.tmdb.org/t/p/w200'+ item.poster_path }}}
            //   title={`${item.original_title}`}
            //   />
            // )}
            //ItemSeparatorComponent={this.renderSeparator}

            />
        )
    }

}

