import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ChooseTerrain extends Component {
  static navigationOptions = {
    title: 'Choose terrain',
  }; 

  render(props) {
    console.log(props)
    return (
      <View>
        <Text>This is the choose terrain screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({})
