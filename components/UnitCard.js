import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native'
import { Card, View, CardItem, Body, Button, Text, Accordion, Container, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import { AppConsumer } from '../storage/AppContext';

const { width } = Dimensions.get("window");

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
                    <CardItem style={{backgroundColor: "#333333", borderWidth: 1, borderColor: "#ffffff"}}>
                      <Body>
                          <Text style={styles.text}>Model Name: {this.props.modelName}</Text>
                          <Text style={styles.text}>BFRole: {this.props.bfRole}</Text>
                          <Text style={styles.text}>Points: {this.props.points}</Text>
                          <Text style={styles.text}>PL: {this.props.PL}</Text>
                          {this.props.weapons.length >= 1 ? (
                            this.props.weapons.length === 1 ?
                            (<Text style={styles.text}>{this.props.weapons.length} Weapon Available</Text>)
                            : (<Text style={styles.text}>{this.props.weapons.length} Weapons Available</Text>)
                            ) : (
                              console.log("")
                              )}
                            <Text style={{color: "#e5b83b", alignSelf:"flex-end" }}>Add</Text>
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
  text: {
    color: "#ffffff"
  }
})

// export default withNavigation(FactionCard);

export default withNavigation(UnitCard);