import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
// components
import NextButton from '../components/NextButton';

export default class BattleScribeScreen extends Component {
  static navigationOptions = {
    title: 'BattleScribe Import',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>This is the BattleScribe screen</Text>

        <Button
          title="IMPORT"
        // onPress={() => }
        />


        <NextButton path="Factions" />

      </View>
    );
  }
}

const styles = StyleSheet.create({})
