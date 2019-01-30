import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class LoadScreen extends Component {
  static navigationOptions = {
    title: 'Load Screen',
  }; 

  render() {
    return (
      <View>
        <Text>This is the Load screen</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({})
