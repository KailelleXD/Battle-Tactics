import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import { Grid } from 'react-native-easy-grid';
import { AppConsumer } from '../storage/AppContext';

export default class GameReviewScreen extends Component {
  render() {
    return (
      <AppConsumer>

        {(context) => {
          { console.log(context.state) }
          <Container>

        {/* <Grid> */}
              <Text> {context.state.playerOne.name} </Text>
        {/* </Grid> */}

     </Container>

        }}

      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({})
