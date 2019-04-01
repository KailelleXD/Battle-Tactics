import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Container, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// screens
import HomeScreenButton from '../../components/HomeScreenButton';
// context
import { AppConsumer } from '../../storage/AppContext';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Battle Phases Test Screen',
  };

  render() {
    return (
      <AppConsumer>
        {(context) => (
          <Container style={{backgroundColor: "#333333"}}>

            <Grid>
                <Col style={styles.col}>
                  <Row style={styles.row}>
                    <HomeScreenButton title='Movement' />
                  </Row>
                  <Row style={styles.row}>
                    <HomeScreenButton title='Psychic' />
                  </Row>
                  <Row style={styles.row}>
                    <HomeScreenButton title='Shooting' />
                  </Row>
                  <Row style={styles.row}>
                    <HomeScreenButton title='Charge' />
                  </Row>
                  <Row style={styles.row}>
                    <HomeScreenButton title='Fight' />
                  </Row>
                  <Row style={styles.row}>
                    <HomeScreenButton title='Morale' />
                  </Row>
                </Col>
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
