import React, { Component } from 'react'
import { 
    Image, 
    View,
    Dimensions,
    StyleSheet
} from 'react-native'

let Window = Dimensions.get('window');

export default class TestScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.mapStyle} source={require('../graphics/temp/fullsize4x6grid1424pxBorder.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapStyle: {
        height: Window.height,
        width: Window.width,
    }
})

