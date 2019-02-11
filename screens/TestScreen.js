import React, { Component } from 'react';
import { View, Image } from 'react-native';
// import PlayArea from '../components/PlayArea';
import PinchZoomView from 'react-native-pinch-zoom-view';
import MapGrid from '../graphics/temp/fullsize4x6grid15.png';
export default class TestScreen extends Component {
  render() {
    return (
      <PinchZoomView>
        <View>
          <Image source={MapGrid} />
        </View>
      </PinchZoomView>
    )
  }
}


