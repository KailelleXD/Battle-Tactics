import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { AppConsumer } from '../storage/AppContext';
import { withNavigation } from 'react-navigation';

class GameMenuButton extends Component {
  render() {
    return (
      <Container>
          <Grid>
              <Row>
                <Button
                    onPress={() => { this.props.navigation.navigate(this.props.path) }}
                >
                <Text>Menu</Text>
                </Button>
              </Row>
          </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})

export default withNavigation(GameMenuButton);
