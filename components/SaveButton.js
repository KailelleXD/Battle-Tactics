import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, Button } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { AppConsumer } from '../storage/AppContext';

export default class SaveButton extends Component {
  render() {
    return (
      <Container>
          <Grid>
            <Row>
                <Button>
                    <Text>Save</Text>
                </Button>
            </Row>
          </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
