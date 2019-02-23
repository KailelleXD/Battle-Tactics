import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text, Card, CardItem, Body } from 'native-base';
import { AppConsumer } from '../storage/AppContext';

class FactionDetailScreen extends Component {
  static navigationOptions = {
    title: "MODEL DETAIL"
  }

  render () {
    const { navigation } = this.props
    const detail = navigation.getParam('detail', 'default value')
    return (
      <View>
        <Text>{detail[0].name}</Text>
        {detail.map((ability, i) => {
          // <Container>
            {console.log(ability)}
            {console.log(ability.name.substring(0, 1))}
            <Card>
              <CardItem>
                <Body>
                  <Text key={ability.name.substring(0, 1)}>Ability Name: {ability.name}</Text>
                </Body>
              </CardItem>
            </Card>
            {/* <Text key={ability.name}>{ability.description}</Text> */}
          {/* </Container> */}

        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default FactionDetailScreen;