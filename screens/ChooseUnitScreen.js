import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import UnitSelector from '../components/UnitSelector';
import NextBackWrapper from '../components/NextBackWrapper';

export default class ChooseUnitScreen extends Component {
  render() {
    return (
      <View>
        <UnitSelector />
        <NextBackWrapper path="DeploymentArea"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
