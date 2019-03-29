import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Button, Text, List, ListItem } from 'native-base';
import { AppConsumer } from '../storage/AppContext';

export default class DeveloperScreen extends Component {
    static navigationOptions = {
        title: "DEVELOPER SETTINGS"
    }

  render() {
    return (
        <AppConsumer>
            {(context) => (
                <Container style={{backgroundColor: "#333333"}}>
                    <Button
                        block
                        style={styles.button}
                        onPress={() => { context.consoleLogFactionTEST() }}
                    >
                        <Text>console log faction test</Text>
                    </Button>
                    <Button
                        block
                        style={styles.button}
                        onPress={() => { context.clearAsyncStorage() }}
                    >
                        <Text>clear asyncstorage</Text>
                    </Button>
                    <Button
                        block
                        style={styles.button}
                        onPress={() => { context.getFactionFromStorage() }}
                    >
                        <Text>get faction from storage</Text>
                    </Button>
                </Container>
            )}
        </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#e5b83b",
        margin: 10,
        alignSelf: "center",
        width: "80%",
        borderRadius: 5
    }
})
