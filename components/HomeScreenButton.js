import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Body } from 'native-base';
import { withNavigation } from 'react-navigation';
import Image from "../assets/img/map3.jpg"

// import loadAsync from '../utils/loadAsync/LoadAsync';


class HomeScreenButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      // imageSource: "./assets/img/map3.jpg"
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
            rounded
            large
            style={styles.button}
            // title={this.props.title}
            onPress={() => { this.props.navigation.navigate(this.props.title) }}
          >
            <Text>{this.props.title}</Text>
          </Button>
        ) : <Text style={styles.text}>"font not loaded"</Text>}
      </View>



    );


    // <Button
    //   title={this.props.title}
    //   onPress={() => { this.props.navigation.navigate(this.props.title) }}
    // />



  }
}

const styles = StyleSheet.create({
  button: {
    // margin: 20,
    padding: 10,
    // paddingRight: 5,
    // paddingLeft: 5,
    width: 180,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#e5b83b",
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    color: "red"
  }

})

export default withNavigation(HomeScreenButton);