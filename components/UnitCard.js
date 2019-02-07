import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableHighlight} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, } from 'native-base';
// import { withNavigation } from 'react-navigation';

class UnitCard extends Component {
  render () {
    return (
      <TouchableHighlight onPress={this.props.cardPress}>
        <View>
          <Card>
            <CardItem>
              <Body>
                <Text> {this.props.name} </Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({})

// export default withNavigation(FactionCard);

export default UnitCard;