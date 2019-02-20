import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, Button } from 'react-native';

import { AppConsumer } from '../storage/AppContext';
import DeploymentAreas from '../utils/data/deploymentAreas.json';

getDeploymentArea = (area) => {
  switch (area) {
    case "area1":
    return require("../graphics/deployment/01-spearhead-assault.png")
    break;

    case "area2":
    return require("../graphics/deployment/02-dawn-of-war.png")
    break;

    case "area3":
    return require("../graphics/deployment/03-search-and-destroy.png")
    break;

    case "area4":
    return require("../graphics/deployment/04-hammer-and-anvil.png")
    break;

    case "area5":
    return require("../graphics/deployment/05-front-line-assault.png")
    break;

    case "area6":
    return require("../graphics/deployment/06-vanguard-strike.png")
    break;

    default:
      return console.log("no map")

  } 
}

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

