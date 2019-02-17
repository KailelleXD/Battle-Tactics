import React, { Component } from "react";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      this.props.updateP1Units(updatedUnits);
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
          hideModalContentWhileAnimating={true}
          >
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Unit Information: P{this.props.data.unit.player}-{this.props.data.unit.id}</Text>
              <View style={styles.modalSeparatorLine} />
            </View>
          <View style={styles.modalMainBody}>
            <View style={styles.modalColumn}>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>X Index: </Text><Text style={styles.dataValue}>{this.props.data.unit.x}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Y Index: </Text><Text style={styles.dataValue}>{this.props.data.unit.y}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Movement Value: </Text><Text style={styles.dataValue}>{this.props.data.unit.m}</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
            </View>
            <View style={styles.modalColumn}>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
            </View>
            <View style={styles.modalSeparatorLine} />
          </View>
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
    height: MODAL_HEIGHT,
    width: "100%",
    backgroundColor: "rgb(245,245,245)",
    borderRadius: 5,
    alignSelf: "center"
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
    height: StyleSheet.hairlineWidth,
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