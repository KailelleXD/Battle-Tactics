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
                    context.setUnit(unit.name)
                  }}
                ></UnitCard>
            ))}
            <Text>Unit: {context.state.playerOne.unit}</Text>
          </View>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

