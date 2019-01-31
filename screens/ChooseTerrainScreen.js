import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { AppConsumer } from '../context/AppContext';
import TerrainSideMenu from '../components/TerrainSideMenu';
import NextButton from '../components/NextButton';

export default class ChooseTerrain extends Component {
  static navigationOptions = {
    title: 'Choose terrain',
  };

  render() {
    return (
      <View>
        <View>
          <AppConsumer>

            {(context) => (
              <View>
                <Text>This is the choose terrain screen</Text>
                <Text>Current Map:{context.state.playerOne.mapName}</Text>
                <TerrainSideMenu />
                {console.log(context.state)}
                {context.state.playerOne.terrain.map(terrain => (
                  <Text key={terrain.id}>{terrain.name}</Text>
                ))}

               <NextButton path="BattleScribe"/>

              </View>
            )
            }

          </AppConsumer>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({})
