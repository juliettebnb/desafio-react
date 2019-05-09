import { Dimensions } from 'react-native';
import React, {Component} from 'react';
import SideSwipe from 'react-native-sideswipe';

//import CustomComponent from '...'


export default class Carousel extends Component {
  state = {
    currentIndex: 0,
  };

  data =  [
          {
          id: 1,
          foto: "https://picsum.photos/200" ,
          titulo: "a",
          genero:"ação" ,
        },
        {
          id: 2,
          foto: "https://picsum.photos/200",
          titulo: "b",
          genero:"ação" ,
        },
        {
          id: "3",
          foto: "https://picsum.photos/200",
          titulo: "c",
          genero:"terror" ,
        }
      ]
  

  
}