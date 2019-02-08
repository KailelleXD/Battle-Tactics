import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import { Container } from 'native-base';
import UnitSelector from '../components/UnitSelector';
import NextBackWrapper from '../components/NextBackWrapper';

export default class ChooseUnitScreen extends Component {
  render() {
    return (
      <Container>
      <Grid style={styles.grid}>
        <Row size={60}>
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
