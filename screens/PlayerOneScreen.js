import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
// components
import PlayerScreenSubHeader from '../components/PlayerScreenSubHeader'
// context
import { AppConsumer } from '../context/AppContext';

import { TextInput } from 'react-native-gesture-handler';

export default class PlayerOneScreen extends Component {
  static navigationOptions = {
    title: 'Player One',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  render() {
    return (
      <AppConsumer>
        {(context) => (
          <View>
            <PlayerScreenSubHeader 
            name={context.state.playerOne.name}
            points={context.state.playerOne.points}
            />
            <TextInput 
              placeholder="enter your name here"
              value={this.state.name}
              onChangeText={(text) => {
                this.setState({name: text})
              }}  
            />
            <Button 
              title="Set Name"
              onPress={() => {
                context.setName(this.state.name);
              }}
            
            />
          </View>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({})
