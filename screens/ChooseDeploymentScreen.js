import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { AppConsumer } from '../storage/AppContext';
import NextBackWrapper from '../components/NextBackWrapper';
import { Grid, Col, Row } from 'react-native-easy-grid';

// components
import DeploymentSelector from '../components/DeploymentSelector'
import NextButton from '../components/NextButton';

export default class ChooseDeployment extends Component {
  static navigationOptions = {
    title: 'Choose Deployment',
    headerLeft: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <AppConsumer>
        {(context) => (
          <Grid style={styles.wrapper}>

            <Row size={15}>
              <Text>This is the choose Deployment screen</Text>
            </Row>

            <Row size={60}>
              <DeploymentSelector />
            </Row>

            <Row size={10}>
            <Text>{context.state.playerOne.deploymentArea}</Text>
            </Row>

            <Row size={15}>
              <NextBackWrapper path="PlaceUnits" />
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
})
