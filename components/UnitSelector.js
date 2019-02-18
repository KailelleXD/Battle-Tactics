import React, { Component } from 'react'
import { AsyncStorage, StyleSheet } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import { AppProvider, AppConsumer } from '../storage/AppContext';
import UnitCard from '../components/UnitCard';
import Units from '../utils/data/units.json';

class CustomDidMount extends Component {
  componentDidMount () {
    this.props.getFactionFromStorage
    console.log("CUSTOMDIDMOOUNTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")
  }
  render () {
    return null
  }
}

export default class UnitSelector extends Component {
  render() {
    return (
        <AppConsumer>
        {(context) => (
          <Container>
            <Button
              onPress={() => context.getFactionFromStorage(context.state.playerOne.faction)}
            >
              <Text>Load Units</Text>
            </Button>
            
            {/* {context.state.factionLoaded ? ( */}

            <Content>
            {console.log(context.state.BSData)}
            {context.state.BSData.data.map(unit => (
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
            </Content>

          </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

