import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';


class NextButton extends React.Component {
  render() {
    return (
      <Button
        title="NEXT"

        onPress={() => { this.props.navigation.navigate(this.props.path) }}
      />
    )
  }
}

export default withNavigation(NextButton);