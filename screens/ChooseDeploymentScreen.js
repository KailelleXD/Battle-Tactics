import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { AppConsumer } from '../storage/AppContext';
import NextBackWrapper from '../components/NextBackWrapper';
import { Grid, Col, Row } from 'react-native-easy-grid';

// components
import DeploymentSelector from '../components/DeploymentSelector'
import NextButton from '../components/NextButton';
import { Container } from 'native-base';

export default class ChooseDeployment extends Component {
  static navigationOptions = {
    title: 'CHOOSE DEPLOYMENT',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <AppConsumer>
        {(context) => (
          <Grid style={styles.wrapper}>
            <Row size={90}>
              <Container style={{backgroundColor: "#333333", alignItems: "center", marginTop: 10}}>
                <DeploymentSelector />
              </Container>
            </Row>
            <Row size={9}>
              <NextBackWrapper path="GameScreen" />
            </Row>
          </Grid>
        )}
      </AppConsumer>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#333333"
  },
})
