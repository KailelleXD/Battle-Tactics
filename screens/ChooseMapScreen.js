import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
// components
import MapSelector from '../components/MapSelector'
import NextBackWrapper from '../components/NextBackWrapper';
// context
import { AppConsumer } from '../storage/AppContext';

export default class ChooseMap extends Component {
  static navigationOptions = {
    title: 'Choose Map',
    headerLeft: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <AppConsumer>
        {(context) => (
          <Grid style={styles.grid}>

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
  grid: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
})
