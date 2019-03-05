import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// screens
import HomeScreenButton from '../components/HomeScreenButton';
// context
import { AppConsumer } from '../storage/AppContext';
import { ScrollView } from 'react-native-gesture-handler';
import Image from '../assets/img/map3.jpg'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'BATTLE-TACTICS',
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
    // const { navigate } = this.props.navigation;
    return (
      <AppConsumer>
        { (context) => (
          <Container>
            {/* {console.log(context.state)}         */}
            <Grid>
            <ImageBackground source={Image} style={{width: '100%', height: '100%'}}>
              <Col style={styles.col}>
                   {/* <Row style={styles.row}>
                     <HomeScreenButton title='Factions' />
                   </Row> */}

                  <Row style={styles.row}>
                    <HomeScreenButton title='Create' />
                  </Row>
                  <Row style={styles.row}>
                    <HomeScreenButton title='Load' />
                  </Row>
                  <Row style={styles.row}>
                    <HomeScreenButton title='Settings' />
                  </Row>
              </Col>
              </ImageBackground>
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
    margin: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }


})


;
