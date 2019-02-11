import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, Button, Item, Picker, Form, Content } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { AppConsumer } from '../storage/AppContext';


export default class DiceManager extends Component {
  constructor(props) {
    super(props);
    this.handleDiceRoll = this.handleDiceRoll.bind(this)
    this.state = {
      reRollOn: 0,
      numOfDice: 0,
      results: 0,
      randomNumber: undefined
    }
  }


  handleDiceRoll(state) {
    const rolledNums = []
    for (let i = 0; i < this.state.numOfDice; i++) {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      this.setState({
        randomNumber: randomNumber
      })
      console.log(this.state)
      if (this.state.randomNumber === this.state.reRollOn) {
        randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Reroll number hit: " + this.state.reRollOn);
        console.log(randomNumber);
        rolledNums.push(randomNumber);
      } else{ rolledNums.push(randomNumber) }
      
    }

    this.setState({
      results: rolledNums
    })
  }


  reRollPickerOnChange(value) {
    this.setState({
      reRollOn: value
    })
  }

  numOfDicePickerOnChange(value) {
    this.setState({
      numOfDice: value
    })
  }


  render() {
    return (
      <Container>
        <Grid>
          <Text>Dice Manager Open</Text>
          <Row>

            <Row>
              <Col>

                <Text>Re-Roll on: {this.state.reRollOn} </Text>
                <Content>
                  <Form>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        // iosIcon={<Icon name="arrow-down" />}
                        // style={{ width: undefined }}
                        placeholder="Select Re-Roll Number"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        // placeholderIconColor="#007aff"
                        selectedValue={this.state.reRollOn}
                        onValueChange={this.reRollPickerOnChange.bind(this)}
                      >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                      </Picker>
                    </Item>
                  </Form>
                </Content>
              </Col>

              <Col>
                <Text>Number Of Dice To Roll: {this.state.numOfDice}</Text>
                <Content>
                  <Form>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        // iosIcon={<Icon name="arrow-down" />}
                        // style={{ width: undefined }}
                        placeholder="Dice To Roll"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        // placeholderIconColor="#007aff"
                        selectedValue={this.state.numOfDice}
                        onValueChange={this.numOfDicePickerOnChange.bind(this)}
                      >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                      </Picker>
                    </Item>
                  </Form>
                </Content>


              </Col>

              <Col>
                <Text>Results: {this.state.results}</Text>
              </Col>

            </Row>

            <Col>
              <Button
                onPress={this.handleDiceRoll}
              ><Text>Roll</Text></Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
