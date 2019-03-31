import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, Button, Content, Icon, List, ListItem, Left, Right } from 'native-base'
// components
import RandomStart from '../components/RandomStart'
import { AppConsumer } from '../storage/AppContext'

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'SETTINGS',
  };

  render() {
    return (
      <AppConsumer>

        {(context) => (
          <Container style={{backgroundColor: "#333333"}}>
            <Content>            
              <List>
                <ListItem 
                  noIndent
                  onPress={() => { this.props.navigation.navigate("PlayerOne") }}
                >
                  <Left>
                    <Text style={styles.listText}>Player One</Text>
                  </Left>
                  <Right>
                    <Icon style={styles.arrow} name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem 
                  noIndent
                  onPress={() => { this.props.navigation.navigate("PlayerTwo") }}
                >
                  <Left>
                    <Text style={styles.listText}>Player Two</Text>
                  </Left>
                  <Right>
                    <Icon style={styles.arrow} name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem 
                  noIndent
                  onPress={() => { this.props.navigation.navigate("Developer") }}
                >
                  <Left>
                    <Text style={styles.listText}>Developer Settings</Text>
                  </Left>
                  <Right>
                    <Icon style={styles.arrow} name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>

              <Button
                style={styles.button}
                onPress={() => { context.getAllData() }}
              >
                <Text>Import Armies</Text>
              </Button>
            </Content>
              {/* <RandomStart random={this.props.randomStart} />  */}
          </Container>
        )}
      </AppConsumer>
    );

  }
}

const styles = StyleSheet.create({
  button: {
    margin: 30,
    // padding: 50,
    // paddingRight: 10,
    // paddingLeft: 10,
    // width: 180,
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: "#e5b83b",
    borderWidth: 1,
    borderColor: "white"
  },
  listText: {
    color: "#ffffff"
  },
  arrow: {
    color: "#e5b83b"
  }
})
