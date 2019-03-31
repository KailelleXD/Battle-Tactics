import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Container, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// screens
import HomeScreenButton from '../components/HomeScreenButton';
// context
import { AppConsumer } from '../storage/AppContext';
import { ScrollView } from 'react-native-gesture-handler';
import Image from '../assets/img/map3.jpg'

import ImportArmies from '../components/ImportArmies'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'BATTLE TACTICS',
  };

  render() {
    return (
      <AppConsumer>
        {(context) => (
          <Container style={{backgroundColor: "#333333"}}>

            <Grid>
              {/* <ImageBackground source={Image} style={{ width: '100%', height: '100%' }}> */}
                <Col style={styles.col}>

                  <Row style={styles.row}>
                    <ImportArmies />
                  </Row>
  
                  {/* <Row style={styles.settings}>
                    <Icon 
                      style={{color:"white"}}
                      color="white"
                      name="settings"
                      onPress={() => { this.props.navigation.navigate("Settings")}}
                    />

                  </Row> */}
                </Col>
              {/* </ImageBackground> */}
            </Grid>

          </Container>
        )}
      </AppConsumer>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    padding: 10,
  },
  row: {
    // margin: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  settings: {
    alignItems: "flex-end",
    alignSelf: "flex-start",
  }


})


  ;
