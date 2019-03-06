import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Container } from 'native-base';
// components
import PlayerScreenSubHeader from '../components/PlayerScreenSubHeader'
// context
import { AppConsumer } from '../storage/AppContext';

import { TextInput } from 'react-native-gesture-handler';

export default class PlayerOneScreen extends Component {
  static navigationOptions = {
    title: 'PLAYER ONE',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1e8fb5',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 23,
    },
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
          <Container style={styles.wrapper}>
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
            {console.log(context.state)}
          </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  }
})
