import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import GameMenuButton from '../components/GameMenuButton';
import NextBackWrapper from '../components/NextBackWrapper';
import { AppConsumer } from '../storage/AppContext';
import DiceManager from '../components/DiceManager';


export default class GameScreen extends Component {
    static navigationOptions = {
        title: 'GAME SCREEN',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#1e8fb5',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 23,
        },
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.diceToggle = this.diceToggle.bind(this);
        this.state = {
            diceManagerIsHidden: true
        }
    }

    handleClick () {
        this.setState(this.diceToggle)
    }

    diceToggle (state) {
        return {
            diceManagerIsHidden: !state.diceManagerIsHidden
        }
    }

  render() {
    return (
    <AppConsumer>
        {(context) => (
            <Container>
                <Grid>
                    <Row>
                        <Col>
                            <Text>Player One Faction: {context.state.playerOne.faction}</Text>
                        </Col>
                        <Col>
                            <Text>Player One Points: {context.state.playerOne.points}</Text>
                        </Col>
                        <Col>
                            <Button
                                onPress={this.handleClick}
                            >
                                <Text>Dice</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Text>Player Two Points</Text>
                        </Col>
                        <Col>
                            <Text>Player Two Faction</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Container>
                            {this.state.diceManagerIsHidden ? (
                                <Text> no manager </Text>
                                ) : <DiceManager />}
                            
                        </Container>
                    </Row>
                    <Row>
                        <GameMenuButton path="GameReview" />
                    </Row>
                    <Row>
                        <NextBackWrapper path="" />
                    </Row>
                </Grid>
            </Container>
        )}
    </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({})
