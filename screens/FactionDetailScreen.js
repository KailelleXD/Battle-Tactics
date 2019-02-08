import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';
import { AppConsumer } from '../storage/AppContext';

class FactionDetailScreen extends Component {
  render () {
    const { navigation } = this.props
    const detail = navigation.getParam('detail', 'default value')
    return (
      <Container>
        <Text>Detail:{detail}</Text>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})

export default FactionDetailScreen;