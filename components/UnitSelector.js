import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Button, Text, Accordion } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid'
import { AppProvider, AppConsumer } from '../storage/AppContext';
import UnitCard from '../components/UnitCard';
import Units from '../utils/data/units.json';
import UnitsModal from './UnitsModal';
import ModelDetailModal from './ModelDetailModal';

const { width } = Dimensions.get("window")
// const window = width

export default class UnitSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnitsModalVisible: false,
      isDetailModalVisible: false,
      modalData: {}
    }
  }

  toggleUnitsModal = () =>
    this.setState({ isUnitsModalVisible: !this.state.isUnitsModalVisible })

  toggleDetailModal = () =>
    this.setState({ isDetailModalVisible: !this.state.isDetailModalVisible })

  render() {
    return (
      <AppConsumer>
        {(context) => (
          // <Container>
          <Grid style={{backgroundColor:"#333333"}}>
            <Row style={{ display:"flex", alignItems: "center" }} size={10}>
              <Col>
              <Button
                style={styles.options}
                full
                onPress={() => context.getFactionFromStorage(context.state.playerOne.faction)}
              >
                <Text>Load Units</Text>
              </Button>
              </Col>
              <Col>
              <Button
                style={styles.options}
                
                full
                onPress={this.toggleUnitsModal}
              >
                <Text>View Units</Text>
              </Button>
              </Col>
            </Row>

            <UnitsModal
              isModalVisible={this.state.isUnitsModalVisible}
              press={this.toggleUnitsModal}
            />

            <ModelDetailModal
              modalData={this.state.modalData}
              isModalVisible={this.state.isDetailModalVisible}
              press={this.toggleDetailModal}
            />

            <Row size={90}>
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
                          advance: false,
                          fallBack: false,
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
                        }), alert(unit.name + " has been added")
                      }}
                      onPress={() => this.setState({ modalData: unit})}
                      press={this.toggleDetailModal}
                      
                    >{}</UnitCard>

                  ) : (console.log(""))
                ))}


              </Content>

            </Row>

            {/* <Row size={20}>

                {context.state.playerOne.units.map(model => {
                  <Text>{model.name}</Text>
                })}
              </Row> */}

          </Grid>
          // </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
  options: {
    backgroundColor: "#e5b83b"
  }
});
