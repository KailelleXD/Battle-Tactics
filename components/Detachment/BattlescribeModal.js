import React, { Component } from "react";
import { Button, Dimensions, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { Container, Content, Text } from 'native-base';
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");
const MODAL_HEIGHT = height / 2.5;

export default class BattlescribeModal extends Component {
  state = {
    woundCounter: 0,
  };

  increaseWoundCounterHandler = () => {
    const currentCount = this.state.woundCounter;
    this.setState({ woundCounter: currentCount + 1 });
  } 

  decreaseWoundCounterHandler = () => {
    const currentCount = this.state.woundCounter;
    this.setState({ woundCounter: currentCount - 1 });
  }

  onOpenHandler = () => {
    this.setState({ woundCounter: this.props.data.unit.wound });
  } 

  onCloseHandler = () => {
    // Storing current unit that deployed the modal
    const modalUnit = {...this.props.data.unit};
    console.log("onCloseHandler initialized");

    if (modalUnit.player === 1) {
      const oldUnits = [...this.props.playerOneState.units];
      const updatedUnits = oldUnits.map(unit => {
          if (unit.id === modalUnit.id) {
              const newUnit = {...unit};
              newUnit.wound = this.state.woundCounter;
              return newUnit;
          } else {
              return unit;
          }
      });

      this.props.updateP1Units(updatedUnits);

    } else if (modalUnit.player === 2) {
      const oldUnits = [...this.props.playerTwoState.units];
      const updatedUnits = oldUnits.map(unit => {
          if (unit.id === modalUnit.id) {
              const newUnit = {...unit};
              newUnit.wound = this.state.woundCounter;
              return newUnit;
          } else {
              return unit;
          }
      });

      this.props.updateP2Units(updatedUnits);

    }
    this.props.updateVis(false);
  }

  deleteUnitHandler = () => {
    const modalUnit = {...this.props.data.unit};
    console.log("deleteUnitHandler initialized");

    if (modalUnit.player === 1) {
      const oldUnits = [...this.props.playerOneState.units];
      const updatedUnits = oldUnits.filter(unit => unit.id !== modalUnit.id);

      // console.log(updatedUnits);
      this.props.updateP1Units(updatedUnits);

    } else if (modalUnit.player === 2) {
      const oldUnits = [...this.props.playerTwoState.units];
      const updatedUnits = oldUnits.filter(unit => unit.id !== modalUnit.id);

      // console.log(updatedUnits);
      this.props.updateP2Units(updatedUnits);
    }
    this.props.updateVis(false);
  }

  render() {
    return (
        <Modal 
          isVisible={this.props.data.isModalVisible}
          onBackdropPress={this.onCloseHandler}
          onModalShow={this.onOpenHandler}
          backdropOpacity={.5}
          >
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Unit Information: P{this.props.data.unit.player}-{this.props.data.unit.name}</Text>
              <View style={styles.modalSeparatorLine} />
            </View>

          {/* <Container> */}
          <View style={styles.modalMainBody}>
            <View style={styles.modalColumn}>
            {/* <Content> */} 
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>X Index: </Text><Text style={styles.dataValue}>{this.props.data.unit.x === 0 ? this.props.data.unit.x : this.props.data.unit.x.toFixed(8)}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Y Index: </Text><Text style={styles.dataValue}>{this.props.data.unit.y === 0 ? this.props.data.unit.y : this.props.data.unit.y.toFixed(8)}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Move: </Text><Text style={styles.dataValue}>{this.props.data.unit.m}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Weapon Skill: </Text><Text style={styles.dataValue}>{this.props.data.unit.ws ? this.props.data.unit.ws : "N/A"}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Ballistic Skill: </Text><Text style={styles.dataValue}>{this.props.data.unit.bs ? this.props.data.unit.bs : "N/A"}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Strength: </Text><Text style={styles.dataValue}>{this.props.data.unit.s ? this.props.data.unit.s : "N/A"}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Toughness: </Text><Text style={styles.dataValue}>{this.props.data.unit.t ? this.props.data.unit.t : "N/A"}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Wound: </Text><Text style={styles.dataValue}>{this.props.data.unit.w ? this.props.data.unit.w : "N/A"}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Attacks: </Text><Text style={styles.dataValue}>{this.props.data.unit.a ? this.props.data.unit.a : "N/A"}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Leadership: </Text><Text style={styles.dataValue}>{this.props.data.unit.ld ? this.props.data.unit.ld : "N/A"}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Save: </Text><Text style={styles.dataValue}>{this.props.data.unit.sv ? this.props.data.unit.sv : "N/A"}</Text>
              </View>
              {/* </Content> */}
            </View>
            <View style={styles.modalSeparatorLine} />
          </View>
            {/* </Container> */}


          <View style={styles.modalBottom}>
            <View style={styles.modelBottomColumn}>
              <Button 
                title="-"
                color="red"
                onPress={this.decreaseWoundCounterHandler}
              />
              <Text>Wounds: {this.state.woundCounter}</Text>
              <Button 
                title="+"
                color="green"
                onPress={this.increaseWoundCounterHandler}
              />
            </View>
            <View style={styles.modelBottomColumn}>
              <Button
                title="Delete Unit"
                color="red"
                onPress={this.deleteUnitHandler} 
              />
            </View>
          </View>
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    // height: MODAL_HEIGHT,
    // height: height,
    width: "100%",
    backgroundColor: "rgb(245,245,245)",
    borderRadius: 5,
    alignSelf: "center",
    display: "flex",
    // flexDirection: "column",q
    justifyContent: "space-between",
  },
  modalHeader: {
    width: "100%",
    height: MODAL_HEIGHT / 6,
    alignItems: "center",
    justifyContent: "center"
  },
  modalHeaderText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  modalSeparatorLine: {
    width: "100%",
    // height: StyleSheet.hairlineWidth,
    backgroundColor: "rgb(185,185,185)",
    position: "absolute",
    bottom: 0,
  },
  modalMainBody: {
    height: MODAL_HEIGHT / 6 * 4,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  modalColumn: {
    width: "50%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "space-evenly"
  },
  dataLine: {
    width: "82%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 15
  },
  dataHeader: {
    fontWeight: "bold",
  },
  dataValue: {
    // marginLeft: 15
    // width: "100%",
    // position: "absolute",
    // right: 30
  },
  modalBottom: {
    height: MODAL_HEIGHT / 6,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  modelBottomColumn: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
})