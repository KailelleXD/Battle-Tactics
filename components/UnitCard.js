import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'
import { Card, CardItem, Body, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { AppConsumer } from '../storage/AppContext';

class UnitCard extends Component {

  render() {
    return (
      <AppConsumer>
        {(context) => (
          <TouchableHighlight onPress={this.props.cardPress}>
            {context.state.playerOne.units.includes(this.props.modelName) ? (
              <View>
                <Card>
                  <CardItem>
                    <Body>
                      <Text>Model Name: {this.props.modelName}</Text>
                      <Text>BFRole: {this.props.bfRole}</Text>
                      <Text>Points: {this.props.points}</Text>
                      <Text>PL: {this.props.PL}</Text>
                      {this.props.weapons.length >= 1 ? (
                        this.props.weapons.length === 1 ?
                          (<Text>{this.props.weapons.length} Weapon Available</Text>)
                          : (<Text>{this.props.weapons.length} Weapons Available</Text>)
                      ) : (
                          console.log("")
                        )}
                      {/* <Button
                        onPress={() => {
                          this.props.navigation.navigate(this.props.path, {
                            detail: this.props.detail
                          })
                        }}
                      >
                        <Text>View Detail</Text>
                      </Button> */}
                    </Body>
                  </CardItem>
                </Card>
              </View>
            ) : (
                <View>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text>Model Name: {this.props.modelName}</Text>
                        <Text>BFRole: {this.props.bfRole}</Text>
                        <Text>Points: {this.props.points}</Text>
                        <Text>PL: {this.props.PL}</Text>
                        {this.props.weapons.length >= 1 ? (
                          this.props.weapons.length === 1 ?
                            (<Text>{this.props.weapons.length} Weapon Available</Text>)
                            : (<Text>{this.props.weapons.length} Weapons Available</Text>)
                        ) : (
                            console.log("")
                          )}
                        {/* <Button
                          style={{ marginTop: 5 }}
                          info
                          small
                          rounded
                          onPress={this.props.press}
                        >
                          <Text>View Detail</Text>
                        </Button> */}
                      </Body>
                    </CardItem>
                  </Card>
                </View>
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

// export default withNavigation(FactionCard);

export default withNavigation(UnitCard);