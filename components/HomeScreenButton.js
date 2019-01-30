import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class HomeScreenButton extends React.Component {
  render() {
    return (

        <Button
          title={this.props.title}
          onPress={() => { this.props.navigation.navigate(this.props.title) }}
        />

    )
  }
}

const styles = StyleSheet.create({})

export default withNavigation(HomeScreenButton);