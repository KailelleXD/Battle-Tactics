import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Button } from 'react-native';

import { AppConsumer } from '../storage/AppContext';

import Maps from '../utils/data/maps.json';


export default class MapSelector extends Component {
  render() {

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

