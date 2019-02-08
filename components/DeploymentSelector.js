import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Button } from 'react-native';

import { AppConsumer } from '../storage/AppContext';
import DeploymentAreas from '../utils/data/deploymentAreas.json';

export default class DeploymentSelector extends Component {
  render() {

    return (
        <AppConsumer>
            {(context) => (
              <View>
                  {DeploymentAreas.map(area => (
                    <Button 
                      title={area.name}
                      key={area.id}
                      onPress={() => {
                        context.setDeploymentArea(area.name);
                      }}
                    />
                  ))}
              </View>
            )}
        </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});

