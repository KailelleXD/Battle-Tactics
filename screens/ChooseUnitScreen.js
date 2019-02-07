import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import UnitSelector from '../components/UnitSelector';

export default class ChooseUnitScreen extends Component {
  render() {
    return (
      <View>
        <UnitSelector />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
