import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Button, TouchableHighlight } from 'react-native';
import { Container, Content } from 'native-base';
import { AppConsumer, getFactionFromStorage } from '../storage/AppContext';
import UnitCard from '../components/UnitCard';
import Units from '../utils/data/units.json';

export default class UnitSelector extends Component {

  
  // componentWillMount() {
    // getFactionFromStorage();
  // }

  render() {


    return (
        <AppConsumer>
        {(context) => (
          <Container>

            {context.state.factionLoaded ?(

            <Content>
            {context.state.BSData.map(unit => (
              (unit["type"] === "unit") ? (

                <UnitCard 
              
                key={unit["id"]} 
                name={unit["name"]} 
                // cardPress={() => {
                  //   context.setUnit({name: unit.name, id: unit.id})
                  // }}
                  >{}</UnitCard>

              ) : (console.log(""))           
         
              ))}

            {/* {context.state.playerOne.units.map(unit => (
              <Text key={unit.id}>Unit: {unit.name}</Text>
            ))} */}
          
          
            </Content>

            ) : (<Text>Loading Units...</Text>)}


          </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

