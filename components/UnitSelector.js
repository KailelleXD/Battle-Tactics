import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Button, TouchableHighlight } from 'react-native';

import { AppConsumer } from '../storage/AppContext';
import UnitCard from '../components/UnitCard';
import Units from '../utils/data/units.json';

export default class UnitSelector extends Component {
  render() {

    return (
      <AppConsumer>
        {(context) => (
          <View>
            {Units.map(unit => (
                <UnitCard 
                  key={unit.id} 
                  name={unit.name} 
                  cardPress={() => {
                    context.setUnit({name: unit.name, id: unit.id})
                  }}
                ></UnitCard>
            ))}

            {context.state.playerOne.units.map(unit => (
            <Text key={unit.id}>Unit: {unit.name}</Text>
            ))}
          
          
          </View>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

