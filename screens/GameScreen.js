import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import GameMenuButton from '../components/GameMenuButton';
import NextBackWrapper from '../components/NextBackWrapper';
import { AppConsumer } from '../storage/AppContext';
import DiceManager from '../components/DiceManager';
import GameStartScreen from '../screens/GameStartScreen';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { red } from 'ansi-colors';


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
            diceManagerIsHidden: true,
            isModalVisiable: false
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
                    <Row size={8}>
                        <Col>
                            <Text>Faction: {context.state.playerOne.faction}</Text>
                        </Col>
                        <Col>
                            <Text>Points: {context.state.playerOne.points}</Text>
                        </Col>
                        <Col>
                            <Button
                                onPress={this.handleClick}
                            >
                                <Text>Dice</Text>
                            </Button>
                        </Col>
                        {/* <Col>
                            <Text>Player Two Points</Text>
                        </Col>
                        <Col>
                            <Text>Player Two Faction</Text>
                        </Col> */}
                    </Row>
                    <Row>
                        <Container>
                            {this.state.diceManagerIsHidden ? (
                                console.log("")
                                ) : 
                                <DiceManager />
                            }                           
                        </Container>
                    </Row>
                    <Row size={75}>
                        <GameStartScreen />
                    </Row>
                    <Row>
                    </Row>
                    <Row size={8}>
                        <Container>
                        <Grid>

                        <Col style={styles.buttonCol}>
                            <Container>
                                <Button
                                    style={styles.button}
                                    >
                                    <Text>Back</Text>
                                </Button>
                            </Container>
                        </Col>
                        <Col style={styles.buttonCol}>
                            <Container>
                                <Button
                                    style={styles.button}
                                    >
                                    <Text>Menu</Text>
                                </Button>
                                {/* <GameMenuButton path="GameReview" /> */}
                            </Container>
                        </Col>
                        <Col style={styles.buttonCol}>
                            <Container>
                                <Button
                                    style={styles.button}
                                    >
                                    <Text>Next</Text>
                                </Button>
                            </Container>
                        </Col>
                        </Grid>
                        </Container>
                        {/* <NextBackWrapper path="" /> */}
                    </Row>
                </Grid>
            </Container>
        )}
    </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: "#e5b83b",
      },
    buttonCol: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
})
