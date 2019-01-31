import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';


const PlayerScreenSubHeader = (props) => {
  return (
    <View>
      <Text>
        Player Name: {props.name}
      </Text>
      <Text>
        Points: {props.points}  
      </Text>
    </View>
  )
}

export default PlayerScreenSubHeader