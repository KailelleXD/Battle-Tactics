import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { AppConsumer } from '../context/AppContext';

// components
import MapSelector from '../components/MapSelector'
import NextButton from '../components/NextButton';

export default class ChooseMap extends Component {
  static navigationOptions = {
    title: 'Choose Map',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <AppConsumer>
        {(context) => (
          <View>
            <Text>This is the choose Map screen</Text>

            <MapSelector />
            <Text>{context.state.playerOne.mapName}</Text>

            <NextButton path="Terrain" />

          </View>
        )}
      </AppConsumer>
    );
  }
}

const styles = StyleSheet.create({})
