import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight} from 'react-native';
import { Card, CardItem, Body, Text, Button } from 'native-base';
import { withNavigation } from 'react-navigation';

class FactionCard extends Component {
  render () {
    return (
      <TouchableHighlight onPress={this.props.cardPress}>
          <Card>
            <CardItem>
              <Body>
                  <Text> {this.props.name} </Text>
                  <Button 
                      // title="View Detail"
                      onPress={() => { this.props.navigation.navigate(this.props.path, {
                        detail: this.props.detail
                      })}}
                      >
                    <Text>View Detail</Text>
                  </Button>
              </Body>
            </CardItem>
          </Card>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({})

export default withNavigation(FactionCard);