import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class UnitCard extends Component {
  render () {
    return (
      <TouchableHighlight onPress={this.props.cardPress}>
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

                
          
          
          // this.props.weapons.map(weapon => {
                  // <Text
                  //   key={weapon.name}
                  // >{weapon.name}</Text>
                  // })
                ) : (
                  console.log("")
                )}

                      <Button 
                        onPress={() => { this.props.navigation.navigate(this.props.path, {
                          detail: this.props.detail
                        })}}
                      >
                        <Text>View Detail</Text>
                      </Button>
                
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

export default withNavigation(UnitCard);