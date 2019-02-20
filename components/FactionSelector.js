import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Dimensions, Image, Button, TouchableHighlight } from 'react-native';
import { Container, Content, Text, } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import { AppConsumer } from '../storage/AppContext';
import FactionCard from '../components/FactionCard';
import Factions from '../utils/data/factions.json';

export default class FactionSelector extends Component {
  render() {

    return (
      <AppConsumer>
        {(context) => (
          // <ScrollView>
            <Container>
                <Grid>
                  <Row size={70}>
              <Content>
                  {Factions.map(faction => (
                    <FactionCard 
                    key={faction.id} 
                    name={faction.name} 
                    detail={faction.detail} 
                    path="FactionDetail"
                    cardPress={() => {
                      context.setFaction(faction.factionName)
                    }}
                    ></FactionCard>
                    ))}

                </Content>
                  </Row>

                  <Row size={20}>
                  <Text>Faction: {context.state.playerOne.faction}</Text>

                  </Row>
                </Grid>
            </Container>
          // </ScrollView>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

