import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Icon, Text } from 'native-base';
import Modal from 'react-native-modal';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { AppConsumer } from '../storage/AppContext';

const { height } = Dimensions.get("window");
const MODAL_HEIGHT = height / 1.5;

export default class ModelDetailModal extends Component {
  render() {
    return (
      <AppConsumer>
        {(context) => (
          <Container>
            <Modal isVisible={this.props.isModalVisible}>
              <Container style={{ borderRadius: 10 }}>
                <Grid>
                  <Row size={10} style={{ justifyContent: "flex-end" }}>
                    <Icon
                      style={{ padding: 10 }}
                      onPress={this.props.press}
                      name="close-circle-outline"
                    />
                  </Row>
                  <Row size={90}>
                    <Grid style={styles.grid}>
                      <Text> {this.props.modalData.modelName} </Text>
                    </Grid>
                  </Row>
                </Grid>
              </Container>
            </Modal>
          </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flexDirection: "column",
    padding: 10
  }
})