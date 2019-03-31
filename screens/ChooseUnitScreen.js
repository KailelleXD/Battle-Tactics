import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import { Container, Content } from 'native-base';
import UnitSelector from '../components/UnitSelector';
import NextBackWrapper from '../components/NextBackWrapper';

export default class ChooseUnitScreen extends Component {
  static navigationOptions = {
    title: 'CHOOSE UNIT',
  };

  render() {
    return (
      <Container style={{backgroundColor: "#333333"}}>
      <Grid>

        <Row size={90}>
          <UnitSelector />
        </Row>

        <Row size={9}>
          <NextBackWrapper path="DeploymentArea" />
        </Row>

      </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  // grid: {
  //   display: "flex",
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "space-around"
  // },
})
