import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native';
// import Drawer from 'react-native-drawer';
import Terrain from '../utils/data/terrain.json';
import { AppConsumer } from '../storage/AppContext';

export default class TerrainSideMenu extends Component {
  render() {
    return (
        <AppConsumer>
            {(context) => (
              <View>
                  {Terrain.map(terrain => (
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
