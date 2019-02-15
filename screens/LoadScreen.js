import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class LoadScreen extends Component {
  static navigationOptions = {
    title: 'LOAD SCREEN',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1e8fb5',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 23,
    },
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
