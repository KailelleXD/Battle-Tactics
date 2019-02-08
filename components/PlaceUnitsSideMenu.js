import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native';
// import Drawer from 'react-native-drawer';
import { AppConsumer } from '../storage/AppContext';
// import { uuid } from 'react-native-uuid'

export default class PlaceUnitsSideMenu extends Component {

  render() {
    return (
      <AppConsumer>
        {(context) => (
          <View>
            {context.state.playerOne.units.map(unit => (
              <Button
                title={unit.name}
                key={unit.id}
                onPress={() => {
                  context.addUnitPlacementObject({
                    name: unit.name,
                    id: unit.id
                    // id: uuid()
                  });
                }}
              />
            ))}
          </View>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({})
