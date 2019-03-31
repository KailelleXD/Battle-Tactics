import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, View, List, ListItem } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { withNavigation } from 'react-navigation';


const PlayerScreenSubHeader = (props) => {
  return (
    <List>
      <ListItem noIndent>
        <Text style={styles.text}>
          Player Name: {props.name}
        </Text>
      </ListItem>
      <ListItem noIndent>
        <Text style={styles.text}>
          Points: {props.points}
        </Text>
      </ListItem>
    </List>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
  }
})

export default PlayerScreenSubHeader