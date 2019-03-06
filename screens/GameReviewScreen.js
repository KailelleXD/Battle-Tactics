import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { AppConsumer } from '../storage/AppContext';
import SaveButton from '../components/SaveButton';

export default class GameReviewScreen extends Component {
  static navigationOptions = {
    title: 'GAME REVIEW',
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
    return (
      
      <AppConsumer>
        {(context) => (
          <Container>
          {/* {console.log(context.state)} */}

            <Grid style={styles.grid}>

              <Row style={styles.row}>
                <Text style={styles.text}>Name:</Text>
                <Text>{context.state.playerOne.name}</Text>
              </Row>

              <Row style={styles.row}>
                <Text style={styles.text}>Map Name:</Text>
                <Text>{context.state.playerOne.mapName}</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.text}>Deployment Area:</Text>
                <Text>{context.state.playerOne.deploymentArea}</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.text}>Faction:</Text>
                <Text>{context.state.playerOne.faction}</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.text}>Points:</Text>
                <Text>{context.state.playerOne.points}</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.text}>Random Start:</Text>
                <Text>{context.state.playerOne.randomStart}</Text>
              </Row>
              <Row style={styles.row}>
                {context.state.playerOne.units.map(unit => (
                  <Text style={styles.text} key={unit.id}>Units:{unit.name}</Text>
                ))}
              </Row>
              <Row style={styles.row}>
                {context.state.playerOne.unitPlacement.map(unitPlace => (
                  <Text style={styles.text} key={unitPlace.id}>Unit Placement: {unitPlace.name}</Text>
                ))}
              </Row>
              <Row style={styles.row}>
                {context.state.playerOne.terrain.map(terrainObj => (
                  <Text style={styles.text} key={terrainObj.id}>Terrain:{terrainObj.name}</Text>
                ))}
              </Row>
              <Row>
                <SaveButton />
              </Row>

            </Grid>

          </Container>

          )}

      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  row: {
    display: "flex",
    flexDirection: "column"
  },
  text: {

  },
  text2: {
    fontSize: 30,
    fontWeight: "bold"
  }
})
