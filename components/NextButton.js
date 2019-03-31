import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Icon, Text, View } from 'native-base';
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
      <View>
      {this.state.fontLoaded ? (
        <Button 
          iconRight
          info
          full
          // bordered
          style={styles.button}
          onPress={() => { this.props.loadUnits, this.props.navigation.navigate(this.props.path) }}
        >
          <Text style={{color: "#e5b83b"}}>Next</Text>
          <Icon style={{color: "#e5b83b"}} name="arrow-forward" />
        </Button>
      ):<Text>"Font of NextButton not loaded"</Text>}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    justifyContent: "flex-end"
    // marginTop: '3%',
    // paddingTop: '10%',
    // paddingBottom: '10%',
    // width: '25%',
    // aspectRatio: 3 / 1,
    // justifyContent: "center",
    // borderRadius: 10,
    // backgroundColor: "#e5b83b",
  },

})

export default withNavigation(NextButton);