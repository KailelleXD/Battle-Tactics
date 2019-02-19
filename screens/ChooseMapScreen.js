import React, { Component } from 'react'
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Text, Container, View, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';

import { Grid, Col, Row } from 'react-native-easy-grid';
// components
import MapSelector from '../components/MapSelector'
import NextBackWrapper from '../components/NextBackWrapper';
import MapCardsSelector from '../components/MapCardsSelector';

// context
import { AppConsumer } from '../storage/AppContext';


export default class ChooseMap extends Component {
  static navigationOptions = {
    title: 'CHOOSE MAP',
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
          <Container>
            <Grid style={styles.grid}>
              <Row size={75}>
                <Container>
                  <MapCardsSelector />
                </Container>
              </Row>

              <Row size={10}>
              <Container>
                <Text>{context.state.gameData.mapName}</Text>
              </Container>
              </Row>


              <Row size={15}>
                <Container>
                  <NextBackWrapper path="Terrain" />
                </Container>
              </Row>

            </Grid>
          </Container>
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


