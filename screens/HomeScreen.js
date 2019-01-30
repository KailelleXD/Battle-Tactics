import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
// screens
import HomeScreenButton from '../components/HomeScreenButton';
// context
import { AppConsumer } from '../context/AppContext';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Battle-Tactics',
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <AppConsumer>
        { (context) => (
          <View>
            <Text>This is the home screen</Text>
            <HomeScreenButton title='Create' />
            <HomeScreenButton title='Load' />
            <HomeScreenButton title='Settings' />
          </View>
        )}
      </AppConsumer>
    );
  }
}

const styles = StyleSheet.create({})
