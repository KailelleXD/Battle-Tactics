import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { AppConsumer } from '../storage/AppContext';

class FactionDetailScreen extends Component {
  render () {
    const { navigation } = this.props
    const detail = navigation.getParam('detail', 'default value')
    return (
      <View>
        <Text>Detail:{detail}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default FactionDetailScreen;