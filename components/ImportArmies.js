import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native';
import { Button, Text } from 'native-base';

import HomeScreenButton from '../components/HomeScreenButton'

import { AppConsumer } from '../storage/AppContext'

export default class ImportArmies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      armiesLoaded: false,
      fontLoaded: false,
      importClicked: false,

    }
  }

  handlePress() {
    this.setState({ importClicked: true });
  }

  secImportArmies = () => {
    AsyncStorage.getItem("38-Tyranids")
      .then(value => {
        if (value === null) {
          this.setState({ armiesLoaded: false })
        } else if (value) {
          this.setState({ armiesLoaded: true, importClicked: false })
        }
      })
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  componentWillUpdate() {
    this.secImportArmies()
  }

  render() {
    return (
      <AppConsumer>
        {(context) => {

          if (context.state === null) {

          } else {

            if (this.state.armiesLoaded) {
              return <HomeScreenButton title='Create' />

            } else if (this.state.fontLoaded && !this.state.armiesLoaded) {

              if (this.state.importClicked) {
                return <ActivityIndicator size="large" color="white" />

              } else {
                return (
                  <View>
                    <Button
                      danger
                      rounded
                      style={styles.button}
                      onPress={() => { this.handlePress(); context.getAllData() }}
                    >
                      <Text>Import Armies!</Text>
                    </Button>
                  </View>
                )
              }
            }
          }
        }}
      </AppConsumer>
    )
  }

}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 50,
    paddingRight: 10,
    paddingLeft: 10,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
})