import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
// components
import NextBackWrapper from '../components/NextBackWrapper';

export default class BattleScribeScreen extends Component {
  static navigationOptions = {
    title: 'BATTLESCRIBE IMPORT',
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

render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Grid style={styles.grid}>
          <Row size={15}>
            <Text>This is the BattleScribe screen</Text>
          </Row>
          <Row size={70}>
            <Button>
              <Text>Import</Text>
            </Button>
          </Row>
          <Row size={15}>
            <NextBackWrapper path="Factions" />
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
})