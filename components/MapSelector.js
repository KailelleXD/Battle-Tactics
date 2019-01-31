import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native'
import map1 from '../assets/img/map1.jpg';
import map2 from '../assets/img/map2.jpg';

export default class MapSelector extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = 400;
    const resizeMode = 'center';

    return (
      <ScrollView
        horizontal={true}
        // pagingEnabled={true}
        // showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.contentContainer}
        alwaysBounceHorizontal={true}
        >
  
        <Image source={map1} />
        <Image source={map2} />
        <Image source={map1} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    
});

