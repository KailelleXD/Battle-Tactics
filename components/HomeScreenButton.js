import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text, Body } from 'native-base';
import { withNavigation } from 'react-navigation';
// import loadAsync from '../utils/loadAsync/LoadAsync';


class HomeScreenButton extends Component {
  
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
            info
            rounded
            large
            style={styles.button}
            // title={this.props.title}
            onPress={() => { this.props.navigation.navigate(this.props.title) }}
          >
            <Text>{this.props.title}</Text>
          </Button>
        ):<Text style={styles.text}>"font not loaded"</Text>}
      </View>



        // <Button
        //   title={this.props.title}
        //   onPress={() => { this.props.navigation.navigate(this.props.title) }}
        // />


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
    borderRadius: 10
  },

  text: {
    color: "red"
  }

})

export default withNavigation(HomeScreenButton);