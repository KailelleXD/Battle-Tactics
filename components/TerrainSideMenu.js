import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native';
// import Drawer from 'react-native-drawer';
import Terrains from '../utils/data/terrains.json';
import { AppConsumer } from '../context/AppContext';

export default class TerrainSideMenu extends Component {
  render() {
    return (
        <AppConsumer>
            {(context) => (
              <View>
                  {Terrains.map(terrain => (
                    <Button 
                      title={terrain.name}
                      key={terrain.id}
                      onPress={() => {
                        context.addTerrainObject({name: terrain.name, id: terrain.id});
                      }}
                    />
                  ))}
              </View>
            )}
        </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({})
