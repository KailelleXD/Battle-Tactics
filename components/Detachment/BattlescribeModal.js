import React, { Component } from "react";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");
const MODAL_HEIGHT = height / 2.5;

export default class BattlescribeModal extends Component {
  state = {
    woundCounter: 0,
  };

  // _toggleModal = () =>
  //   this.setState({ isModalVisible: !this.state.isModalVisible });
  increaseWoundCounterHandler = () => {
    const currentCount = this.state.woundCounter;
    this.setState({ woundCounter: currentCount + 1 });
  }

  decreaseWoundCounterHandler = () => {
    const currentCount = this.state.woundCounter;
    this.setState({ woundCounter: currentCount - 1 });
  }

  render() {
    return (
        <Modal 
          isVisible={this.props.data.isModalVisible}
          onBackdropPress={() => this.props.updateVis(false)}
          backdropOpacity={.5}
          >
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Unit Information: {this.props.data.unitID ? this.props.data.unitID : "Null"}</Text>
              <View style={styles.modalSeparatorLine} />
            </View>
          <View style={styles.modalMainBody}>
            <View style={styles.modalColumn}>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Statistic: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Statistic: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Statistic: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Statistic: </Text><Text style={styles.dataValue}>0</Text>
              </View>
            </View>
            <View style={styles.modalColumn}>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Statistic: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Statistic: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Stat: </Text><Text style={styles.dataValue}>0</Text>
              </View>
              <View style={styles.dataLine}>
                <Text style={styles.dataHeader}>Unit Statistic: </Text><Text style={styles.dataValue}>0</Text>
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
              <Text>Wound Count: {this.state.woundCounter}</Text>
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
                onPress={null} 
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
    width: "85%",
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