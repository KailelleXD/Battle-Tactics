import React, { Component } from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
// import PlayArea from '../components/PlayArea';
// import PinchZoomView from 'react-native-pinch-zoom-view';
import Test from '../components/Test';
import MapGrid from '../graphics/temp/fullsize4x6grid15.png';
import Detachment from '../components/Detachment/Detachment';

const Window = Dimensions.get('window');
const SCREEN_WIDTH = Window.width;
const SCREEN_HEIGHT = SCREEN_WIDTH * 1.5;

export default class TestScreen extends Component {
  render() {
    return (

      <Test>
        <Detachment style={{zIndex: 99}} />
        <ImageBackground source={MapGrid} style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT, zIndex: -5}} />
      </Test>

    )
  }
}


