import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
// context
import { AppConsumer } from '../storage/AppContext';
// components
import FactionSelector from '../components/FactionSelector'
import NextButton from '../components/NextButton';
import NextBackWrapper from '../components/NextBackWrapper';



export default class ChooseFactionScreen extends Component {
  static navigationOptions = {
    title: 'CHOOSE FACTION',
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
    const {navigate} = this.props.navigation;

    return (
      <AppConsumer>
        {(context) => (     
          <Container>
            <Grid style={styles.grid}>
              <Row size={90}>
                <FactionSelector />
              </Row>
              <Row size={10}>
                <NextBackWrapper path="Units"/>
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