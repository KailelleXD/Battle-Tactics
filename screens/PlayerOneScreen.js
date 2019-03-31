import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Input, Item } from 'native-base';
// components
import PlayerScreenSubHeader from '../components/PlayerScreenSubHeader'
// context
import { AppConsumer } from '../storage/AppContext';

export default class PlayerOneScreen extends Component {
  static navigationOptions = {
    title: 'PLAYER ONE',
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
          <Content>

            <PlayerScreenSubHeader 
            name={context.state.playerOne.name}
            points={context.state.playerOne.points}
            />

            <Item rounded style={{width: "80%", alignSelf: "center", margin: 20}}>
              <Input 
                style={styles.input}
                placeholder="Enter Your Name Here"
                value={this.state.name}
                onChangeText={(text) => {
                  this.setState({name: text})
                }}
              />
              <TouchableOpacity style={{padding: 15}}>
                <Text style={{color: "#e5b83b"}}>
                  Set
                </Text>
              </TouchableOpacity>
              {/* </Button> */}
            </Item>
          </Content>
          </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#333333"
  },
  input: {
    borderRadius: 10,
    color: "#ffffff"
  }
})
