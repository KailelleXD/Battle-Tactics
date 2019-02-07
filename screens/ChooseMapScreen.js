import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { AppConsumer } from '../storage/AppContext';
import NextBackWrapper from '../components/NextBackWrapper';
import { Grid, Col, Row } from 'react-native-easy-grid';

// components
import MapSelector from '../components/MapSelector'
import NextButton from '../components/NextButton';

export default class ChooseMap extends Component {
  static navigationOptions = {
    title: 'Choose Map',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <AppConsumer>
        {(context) => (
          <Grid style={styles.wrapper}>

            <Row size={15}>
              <Text>This is the choose Map screen</Text>
            </Row>

            <Row size={70}>
              <MapSelector />
              <Text>{context.state.playerOne.mapName}</Text>
            </Row>

            {/* <NextButton path="Terrain" /> */}
            <Row size={15}>
              <NextBackWrapper path="Terrain" />
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
