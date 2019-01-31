import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Button } from 'react-native';

import { AppConsumer } from '../context/AppContext';
import map1 from '../assets/img/map1.jpg';
import map2 from '../assets/img/map2.jpg';

import Maps from '../utils/data/maps.json';

export default class MapSelector extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = 400;
    const resizeMode = 'center';

    return (
        <AppConsumer>
            {(context) => (
              <View>
                  {Maps.map(map => (
                    <Button 
                      title={map.name}
                      key={map.id}
                      onPress={() => {
                        context.setMap(map.name);
                      }}
                    />
                  ))}
              </View>
            )}
        </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
    
});

