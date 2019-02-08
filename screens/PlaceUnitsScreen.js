import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { AppConsumer } from '../storage/AppContext';
import PlaceUnitsSideMenu from '../components/PlaceUnitsSideMenu';
import NextButton from '../components/NextButton';
import { Grid, Col, Row } from 'react-native-easy-grid';


export default class PlaceUnitsScreen extends Component {
  static navigationOptions = {
    title: 'Place Units',
  };

  render() {
    return (

          <AppConsumer>

            {(context) => (
              <Grid style={styles.wrapper}>

                <Row size={10}>
                  <Text>This is the Place Units screen</Text>
                </Row>

                <Row size={10}>
                  <Text>Current Map:{context.state.playerOne.mapName}</Text>
                </Row>

                <Row size={10}>
                  <Text>Current Terrain items:</Text>
                  {context.state.playerOne.terrain.map(terrain => (
                    <Text key={terrain.id}>{terrain.name + ", "}</Text>
                  ))}
                </Row>

                <Row size={60}>
                  <PlaceUnitsSideMenu />
                  {console.log(context.state)}
                </Row>

                <Row size={10}>
                  <NextButton path="" />
                </Row>


              </Grid>
            )
            }

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

