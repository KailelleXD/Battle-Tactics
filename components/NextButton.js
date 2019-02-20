import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';


class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <Container>
      {this.state.fontLoaded ? (
        <Button 
          info
          small
          style={styles.button}
          onPress={() => { this.props.loadUnits, this.props.navigation.navigate(this.props.path) }}
        >
          <Text>Next</Text>
        </Button>
      ):<Text>"Font of NextButton not loaded"</Text>}
    </Container>
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
    borderRadius: 10,
    backgroundColor: "#e5b83b",
  },
})

export default withNavigation(NextButton);