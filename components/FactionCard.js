import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight} from 'react-native';
import { Card, CardItem, Body, Text, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
import { AppConsumer } from '../storage/AppContext';

class FactionCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      selected: false
    }
  }

  toggleSelected () {
    
  }

  render () {
    return (
      <AppConsumer>
        {(context) => (
          <TouchableHighlight onPress={this.props.cardPress}>
            {this.props.faction === context.state.playerOne.faction ? (
              <Card>
                <CardItem style={styles.card}>
                  <Body>
                    <Text style={styles.text}> {this.props.name} </Text>
                  </Body>
                </CardItem>
              </Card>
            ) : (
              <Card>
                <CardItem>
                  <Body>
                    <Text> {this.props.name} </Text>
                  </Body>
                </CardItem>
              </Card>
            )}
          </TouchableHighlight>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#12566d",
  },
  text: {
    color: "white"
  }
})

export default withNavigation(FactionCard);