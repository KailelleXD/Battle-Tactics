import React, { Component } from 'react'
import { AsyncStorage, StyleSheet } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid'
import { AppProvider, AppConsumer } from '../storage/AppContext';
import UnitCard from '../components/UnitCard';
import Units from '../utils/data/units.json';

export default class UnitSelector extends Component {
  render() {
    return (
      <AppConsumer>
        {(context) => (
          <Container>
            <Grid>

              <Row size={10}>

                <Button
                  onPress={() => context.getFactionFromStorage(context.state.playerOne.faction)}
                >
                  <Text>Load Units</Text>
                </Button>
              </Row>

              <Row size={70}>
                <Content>
                  {context.state.BSData.data.map(unit => (

                    (unit.type === "model") ? (

                      <UnitCard
                        key={unit["id"]}
                        detail={unit.abilities}
                        path="FactionDetail"
                        modelName={unit.name}
                        bfRole={unit.bf_role}
                        points={unit.pts}
                        PL={unit.PL}
                        weapons={unit.weapons}
                        cardPress={() => {
                          context.setUnit({ 
                            id: unit.id, 
                            style: "modelKiwi",
                            text: "",
                            modelName: unit.name,
                            player: 1,
                            x: 0,
                            y: 0,
                            a: unit.profile.A,
                            bs: unit.profile.BS,
                            ld: unit.profile.Ld,
                            m: unit.profile.M,
                            s: unit.profile.S,
                            sv: unit.profile.Sv,
                            t: unit.profile.T,
                            ws: unit.profile.WS,
                            wound: unit.profile.W,
                            ability: unit.abilities,
                            inRange: false,
                            weapons: unit.weapons
                          })
                        }}
                      >{}</UnitCard>

                    ) : (console.log(""))
                  ))}
                </Content>

              </Row>

              <Row size={20}>

                {context.state.playerOne.units.map(model => {
                  <Text>{model.name}</Text>
                })}
              </Row>

            </Grid>
          </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({

});
