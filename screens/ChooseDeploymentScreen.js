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
      <AppConsumer>
        {(context) => (
          <Grid style={styles.wrapper}>
            <Row size={90}>
              <Container style={styles.center}>
                <DeploymentSelector />
              </Container>
            </Row>
            <Row size={10}>
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
    justifyContent: "space-around"
  },
  center: {
    alignItems: 'center'
  }
})
