import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
// components
import MapSelector from '../components/MapSelector'

export default class ChooseMap extends Component {
  static navigationOptions = {
    title: 'Choose Map',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text>This is the choose Map screen</Text>

        <MapSelector />

        <Button
          title="Choose Terrain"
          onPress={() => navigate('Terrain', { name: 'Terrain' })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({})
