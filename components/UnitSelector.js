import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Button, TouchableHighlight } from 'react-native';
import { Container, Content } from 'native-base';
import { AppConsumer } from '../storage/AppContext';
import UnitCard from '../components/UnitCard';
import Units from '../utils/data/units.json';

export default class UnitSelector extends Component {

  collectUnits = (key) => {
    const object = Object.values(key);
    const obj2 = Object.keys(object)
    console.log(object)
    this.collectMOREUnits(object)
    return object;
  }

  collectMOREUnits = (object) => {
    const obj2 = Object.keys(object)
    // console.log("MORE units object: ")
    // console.log(obj2)
    return obj2;
  }
  
  
  render() {
    


    return (
        <AppConsumer>
        {(context) => (
          <Container>
            <Content>
            {this.collectUnits(context.state.BSData.data[0].categoryArr).map(unit => (
              <UnitCard 
              
              key={unit.id} 
              name={unit.catName} 
              // cardPress={() => {
                //   context.setUnit({name: unit.name, id: unit.id})
                // }}
                >{}</UnitCard>
              ))}

            {/* {context.state.playerOne.units.map(unit => (
              <Text key={unit.id}>Unit: {unit.name}</Text>
            ))} */}
          
          
            </Content>
          </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

