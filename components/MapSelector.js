import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableHighlight, Image, Dimensions, VirtualizedListProperties } from 'react-native'
import MapSwitch from './MapSwitch';
// components
import Maps from '../utils/data/maps.json';
// context 
import { AppConsumer } from '../storage/AppContext';

const deviceWidth = Dimensions.get('window').width/1.25;

export default class MapSelector extends Component {


  render() {
    return (
      <AppConsumer>
        {(context) => (
          <View
            style={{
              width: deviceWidth + 3, 
              height: deviceWidth * 1.5, 
              alignSelf: "center",
              marginTop: 10, 
              borderWidth: 1.5,
              borderColor: "#ffffff"
            }}
          >
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={true}
              indicatorStyle='white'
            >
              {Maps.map(map => (
                  <View key={map.id}>
                    <View style={{backgroundColor: "#e5b83b"}}>
                      <Text style={{textAlign: "center", color: "#ffffff", padding: 10}}>{map.name}</Text>
                    </View>
                    <TouchableHighlight
                      onPress={() => {
                        context.setMap(map.name)
                        alert("You have selected " + map.name)
                      }}
                    >
                      <Image 
                        // key={map.id}
                        source={MapSwitch(map.name)} 
                        style={{width: deviceWidth, height: deviceWidth * 1.5}} 
                        resizeMode='cover'          
                        />
                    </TouchableHighlight>
                  </View>
              ))}
            </ScrollView>
          </View>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({})
