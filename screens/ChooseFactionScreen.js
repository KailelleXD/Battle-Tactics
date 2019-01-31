import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
// components
import FactionSelector from '../components/FactionSelector'
import NextButton from '../components/NextButton';

export default class ChooseFactionScreen extends Component {
  static navigationOptions = {
    title: 'Choose Faction',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text>This is the Choose Faction screen</Text>
        <FactionSelector />
        <NextButton path=""/>
      </View>
    );
  }
}

const styles = StyleSheet.create({})