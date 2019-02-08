import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid'
// components
import FactionSelector from '../components/FactionSelector'
import NextButton from '../components/NextButton';
import NextBackWrapper from '../components/NextBackWrapper';



export default class ChooseFactionScreen extends Component {
  static navigationOptions = {
    title: 'Choose Faction',
    headerLeft: null
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Grid style={styles.grid}>
          <Row size={15}>
            <Text>This is the Choose Faction screen</Text>
          </Row>
          <Row size={70}>
            <FactionSelector />
          </Row>
          <Row size={15}>
            <NextBackWrapper path="Units"/>
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