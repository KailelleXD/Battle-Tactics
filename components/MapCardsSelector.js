import React, { Component } from 'react'
import { Container, StyleSheet, Image } from 'react-native'
import { View, Text, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button } from 'native-base';

import MapSwitch from './MapSwitch';


// components
import Maps from '../utils/data/maps.json';

// context 
import { AppConsumer } from '../storage/AppContext';


const MapCardsSelector = () => {
  
  return (
    <AppConsumer>
      {(context) => (
       
        <View>

          <DeckSwiper
            dataSource={Maps}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem style={styles[item.style]}>
                  <Left>
                    <Thumbnail style={styles.thumbnailStyle} source={MapSwitch(item.name)} />
                    <Body>
                      <Text style={styles.textStyle}>{item.name}</Text>
                      <Text style={styles.textStyle} note>{item.subNote}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={MapSwitch(item.name)} />
                </CardItem>
                <CardItem style={styles[item.style]}>
                  <Icon name="grid" style={{ color: '#f9511d' }} 
                  onPress={() => {
                    context.setMap(item.name);
                    // console.log(context.state.gameData.mapName)

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



const styles = StyleSheet.create({
  thumbnailStyle: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 28
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 20
  },
  map1: {
    backgroundColor: '#D7E1E1'
  },
  map2: {
    backgroundColor: '#808F83'
  },
  map3: {
    backgroundColor: '#C1B5AB'
  },
  map4: {
    backgroundColor: '#E2D3CE'
  },
  map5: {
    backgroundColor: '#F9E0CA'
  },
  map6: {
    backgroundColor: '#D0E0B5'
  },
  map7: {
    backgroundColor: '#D4CC8D'
  },
  map8: {
    backgroundColor: '#AD8B7B'
  },
  map9: {
    backgroundColor: '#939065'
  },
  map10: {
    backgroundColor: '#E9DFDF'
  },
  map11: {
    backgroundColor: '#FCE4DC'
  },
  map12: {
    backgroundColor: '#8C9494'
  },
  map13: {
    backgroundColor: '#F3E6C9'
  },
  map14: {
    backgroundColor: '#D2CCC9'
  },
  map15: {
    backgroundColor: '#939879'
  },
  
})

export default MapCardsSelector;
