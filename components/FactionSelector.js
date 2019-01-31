import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Button } from 'react-native';

import { AppConsumer } from '../context/AppContext';
import FactionCard from '../components/FactionCard';
import Factions from '../utils/data/factions.json';

export default class FactionSelector extends Component {
  render() {

    return (
      <AppConsumer>
        {(context) => (
          <View>
            {Factions.map(faction => (
                <FactionCard name={faction.name}/>
                
         

            ))}

            

            <Text>Faction: {context.state.playerOne.faction}</Text>

            

          </View>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

