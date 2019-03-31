import React, { Component } from 'react'
import { StyleSheet, ScrollView, Dimensions, Image, Button, TouchableHighlight, FlatList } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

import { AppConsumer } from '../storage/AppContext';
import FactionCard from '../components/FactionCard';
import Factions from '../utils/data/factions.json';

export default class FactionSelector extends Component {

  render() {
    return (
      <AppConsumer>
        {(context) => (
          <Content>
            <List>
              {Factions.map(faction => (
                <ListItem 
                  noIndent
                  key={faction.id}
                  onPress={() => {
                    context.setFaction(faction.factionName)
                  }}
                  style={{
                    backgroundColor: context.state.playerOne.faction === faction.factionName ? "#e5b83b" : "#333333"
                  }}
                >
                  <Text style={{color: "#ffffff"}}>{faction.name}</Text>
                </ListItem>
              ))}
            </List>
          </Content>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

