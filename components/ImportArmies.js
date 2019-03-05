import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import HomeScreenButton from '../components/HomeScreenButton'

import { AppConsumer } from '../storage/AppContext'


export default class ImportArmies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      armiesLoaded: false,
      fontLoaded: false,

    }
  }

  componentDidMount() {
    <AppConsumer>
      {(context) => {
        context.importArmies()

      }}

    </AppConsumer>
  }


  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }


  render() {
    return (
      <AppConsumer>
        {(context) => {


          if (context.state === null) {
            console.log("state is null")
          } else {
            console.log("----------")
            // console.log(context.state.BSData.data)
            // if (context.state.BSData.data.length >= 1) {
            //   <Row>
            //     <Button>GOOD</Button>
            //   </Row>
            // } else {
            //   <Row>
            //     <Button>You Need To Import Armies</Button>
            //   </Row>
            // }

            if (context.state.BSData.importedArmies) {
              return <HomeScreenButton title='Create' />

            } else if (this.state.fontLoaded && !context.state.BSData.importedArmies) {
              return (
                <View>

                  <Button
                    danger
                    rounded
                    style={styles.button}
                    onPress={() => { context.getAllData() }}
                  >
                    <Text>Import Armies!</Text>
                  </Button>
                </View>

              )
            }
            // else {
            //   return <Button><Text> last condi</Text></Button>

            // }

            // context.state.BSData.importedArmies ?
            //   (


            //           <Button><Text>GOOD</Text></Button>

            //   ) :
            //   (

            //           <Button><Text>You Need To Import Armies</Text></Button>


            //   )
          }

        }}
      </AppConsumer>
    )

  }
}


const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 50,
    paddingRight: 10,
    paddingLeft: 10,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
})