import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Text, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
// components
import MapSelector from '../components/MapSelector'
import NextBackWrapper from '../components/NextBackWrapper';
// context
import { AppConsumer } from '../storage/AppContext';

// import Image from '../assets/img/map5.jpg'

export default class ChooseMap extends Component {
  static navigationOptions = {
    title: 'CHOOSE MAP',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1e8fb5',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 23,
    },
  };

  

  render() {
    const { navigate } = this.props.navigation;
    // const cards = [
    //   {
    //     text: 'Card One',
    //     name: 'One',
        // image: require('../assets/img/map5.jpg'),
        
    //   }
    // ]

    return (
      <AppConsumer>
        {(context) => (
          <Grid style={styles.grid}>

            <Row size={15}>
              <Text>This is the choose Map screen</Text>
            </Row>

            <Row size={60}>
              <MapSelector />
            </Row>

            <Row size={10}>
              <Text>{context.state.gameData.mapName}</Text>
            </Row>

            {/* <NextButton path="Terrain" /> */}
            <Row size={15}>
              <NextBackWrapper path="Terrain" />
            </Row>

            {/* <View>
              <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={item.image} />
                        <Body>
                          <Text>{item.text}</Text>
                          <Text note>NativeBase</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                      <Text>{item.name}</Text>
                    </CardItem>
                  </Card>
                }
              />
            </View> */}

          </Grid>
        )}
  
      </AppConsumer>
    );
  }
}


const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },

  cards: {
    display: "flex",
  }
})

