import React, { Component } from 'react'
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { 
  Text, 
  Container, 
  View, 
  DeckSwiper, 
  Card, 
  CardItem, 
  Thumbnail, 
  Left, 
  Body, 
  Icon 
} from 'native-base';

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

  // RENDER FUNCTIONS ////

  // This function uses a conditional to decide whether to display it's text.
  shouldDisplayText = (mapName) => {
    if (mapName !== "") {
      return(
        <Text style={styles.textStyle}>{mapName} has been selected.</Text>
      )
    }
  }

  

  render() {

    const { navigate } = this.props.navigation;


    return (
      <AppConsumer>
        {(context) => (
          <Container style={styles.backgroundStyle}>
            <Grid style={styles.grid}>
              <Row size={80}>
                <Container style={styles.backgroundStyle}>
                  <MapCardsSelector />
                </Container>
              </Row>

              <Row size={10}>
              <Container style={styles.backgroundStyle}>
                {this.shouldDisplayText(context.state.gameData.mapName)}
              </Container>
              </Row>


              <Row size={10}>
                <Container style={styles.backgroundStyle}>
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
  textStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    backgroundColor: '#EAEEF0',
    color: '#718EA4'
  },
  backgroundStyle: {
    backgroundColor: '#C7C7C7'
  }

})


