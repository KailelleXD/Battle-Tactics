import React, { Component } from 'react'
import { Container, StyleSheet, Image } from 'react-native'
import { View, Text, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button } from 'native-base';
import MapSwitch from './MapSwitch';

// components
import Maps from '../utils/data/maps.json';

// context 
import { AppConsumer } from '../storage/AppContext';


getImage = (image) => {
  switch (image) {
    case "map1":
    return require("../graphics/maps/alienmarsh.png")
    break;

    case "map2":
    return require("../graphics/maps/darklands.png")
    break;

    case "map3":
    return require("../graphics/maps/deadlands.png")
    break;

    case "map4":
    return require("../graphics/maps/drydesert.png")
    break;

    case "map5":
    return require("../graphics/maps/DustPlains.png")
    break;

    case "map6":
    return require("../graphics/maps/grassfield.png")
    break;

    case "map7":
    return require("../graphics/maps/io.png")
    break;

    case "map8":
    return require("../graphics/maps/mars.png")
    break;

    case "map9":
    return require("../graphics/maps/muddyriver.png")
    break;

    case "map10":
    return require("../graphics/maps/RockFormations.png")
    break;

    case "map11":
    return require("../graphics/maps/SandDunes.png")
    break;

    case "map12":
    return require("../graphics/maps/shallowsea.png")
    break;

    case "map13":
    return require("../graphics/maps/venus.png")
    break;

    case "map14":
    return require("../graphics/maps/wasteland.png")
    break;

    case "map15":
    return require("../graphics/maps/wetlands.png")
    break;

    default:
      return console.log("no map")

  } 
}

const MapCardsSelector = () => {
  
  
  return (
    <AppConsumer>
      {(context) => (
       
        <View>

          <DeckSwiper
            dataSource={Maps}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={MapSwitch(item.image)} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.subNote}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={MapSwitch(item.image)} />
                </CardItem>
                <CardItem>
                  <Icon name="grid" style={{ color: '#f9511d' }} 
                  onPress={() => {
                    context.setMap(item.image);
                    console.log(context.state.gameData.mapName)

                  }}
                  />
                  <Text>{item.text}</Text>
                </CardItem>
              </Card>
            }
            />

            </View>
      
      )}
    </AppConsumer>

  )

}



const styles = StyleSheet.create({})

export default MapCardsSelector;
