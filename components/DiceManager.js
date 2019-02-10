import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, Button, Item, Picker } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { AppConsumer } from '../storage/AppContext';


export default class DiceManager extends Component {
  render() {
    return (
        <Container>
            <Grid>
                <Text>Dice Manager Open</Text>
                    <Row>
                        <Col>
                            <Row>
                                <Text>Re-Roll on: </Text>
                                    <Item picker>
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            style={{ width: undefined }}
                                            placeholder="Select your SIM"
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            selectedValue={this.state.selected2}
                                            onValueChange={this.onValueChange2.bind(this)}
                                        >
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="3" value="3" />
                                            <Picker.Item label="4" value="4" />
                                            <Picker.Item label="5" value="5" />
                                            <Picker.Item label="6" value="6" />
                                        </Picker>
                                    </Item>
                            </Row>
                            <Row>
                                <Text>Dice to roll: </Text>
                            </Row>
                        </Col>
                        <Col>
                            <Text>Results: </Text>
                        </Col>
                        <Col>
                            <Button><Text>Roll</Text></Button>
                        </Col>
                    </Row>
            </Grid>
        </Container>
    )
  }
}

const styles = StyleSheet.create({})
