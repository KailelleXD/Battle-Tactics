import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import { Container, Content } from 'native-base';
import UnitSelector from '../components/UnitSelector';
import NextBackWrapper from '../components/NextBackWrapper';

export default class ChooseUnitScreen extends Component {
  static navigationOptions = {
    title: 'CHOOSE UNIT',
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
    return (
      <Container>
      <Grid style={styles.grid}>

        <Row size={90}>
          <UnitSelector />
        </Row>

        <Row size={10}>
          <NextBackWrapper path="DeploymentArea" />
        </Row>

      </Grid>
      </Container>
    )
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
