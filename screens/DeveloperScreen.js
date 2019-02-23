import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Button, Text } from 'native-base';
import { AppConsumer } from '../storage/AppContext';

export default class DeveloperScreen extends Component {
    static navigationOptions = {
        title: "DEVELOPER'S SETTINGS"
    }

  render() {
    return (
        <AppConsumer>
            {(context) => (
                <Container>
                    <Button
                            info
                            rounded
                            style={styles.button}
                            onPress={() => { context.consoleLogFactionTEST() }}
                    >
                        <Text>consoleLogFactionTEST</Text>
                    </Button>
                    <Button
                            info
                            rounded
                            style={styles.button}
                            onPress={() => { context.clearAsyncStorage() }}
                    >
                        <Text>clearAsyncStorage</Text>
                    </Button>
                    <Button
                            info
                            rounded
                            style={styles.button}
                            onPress={() => { context.getFactionFromStorage() }}
                    >
                        <Text>getFactionFromStorage</Text>
                    </Button>
                </Container>
            )}
        </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
        padding: 50,
        paddingRight: 10,
        paddingLeft: 10,
        width: 180,
        justifyContent: "center",
        borderRadius: 10
    }
})
