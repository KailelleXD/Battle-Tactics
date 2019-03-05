
import React, { Component } from 'react'
import { TouchableHighlight, View, StyleSheet, Image, Dimensions, ScrollView, ImageBackground } from 'react-native'
import { AppConsumer } from '../storage/AppContext';
import { Container } from 'native-base';
import DeploymentAreas from '../utils/data/deploymentAreas.json';
import MapSwitch from '../components/MapSwitch';

const deviceWidth = Dimensions.get('window').width/1.25;

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
  render () {
    return (
      <AppConsumer>
        {(context) => (
          <View>
            <ImageBackground 
              // resizeMode="cover" 
              style={{width: deviceWidth, height: deviceWidth * 1.5}}
              source={MapSwitch(context.state.gameData.mapName)} 
            >
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              >
              <TouchableHighlight
                onPress={() => {context.setDeploymentArea("area1")}}
              >
                <Image 
                  style={{width: deviceWidth, height: deviceWidth * 1.5, opacity: 0.6}}
                  source={getDeploymentArea("area1")} 
                  resizeMode='cover'          
                  />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {context.setDeploymentArea("area2")}}
              >
                <Image 
                  style={{width: deviceWidth, height: deviceWidth * 1.5, opacity: 0.6}}
                  source={getDeploymentArea("area2")} 
                  resizeMode='cover'          
                  />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {context.setDeploymentArea("area3")}}
              >
                <Image 
                  style={{width: deviceWidth, height: deviceWidth * 1.5, opacity: 0.6}}
                  source={getDeploymentArea("area3")} 
                  resizeMode='cover'          
                  />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {context.setDeploymentArea("area4")}}
              >
                <Image 
                  style={{width: deviceWidth, height: deviceWidth * 1.5, opacity: 0.6}}
                  source={getDeploymentArea("area4")} 
                  resizeMode='cover'          
                  />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {context.setDeploymentArea("area5")}}
              >
                <Image 
                  style={{width: deviceWidth, height: deviceWidth * 1.5, opacity: 0.6}}
                  source={getDeploymentArea("area5")} 
                  resizeMode='cover'          
                  />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {context.setDeploymentArea("area6")}}
              >
                <Image 
                  style={{width: deviceWidth, height: deviceWidth * 1.5, opacity: 0.6}}
                  source={getDeploymentArea("area6")} 
                  resizeMode='cover'          
                  />
              </TouchableHighlight>
                
            </ScrollView>
            </ImageBackground>

          </View>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

})