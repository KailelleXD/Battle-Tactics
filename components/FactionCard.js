import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, } from 'native-base';
import { withNavigation } from 'react-navigation';


const FactionCard = (props) => {
  return (
    <View>
      <Card onPress={console.log(props.name)}>
        <CardItem>
          <Body>
            <Text> {props.name} </Text>
            <Button
              title="View Detail"
              // onPress={() => { this.props.navigation.navigate('FactionDetail') }}
            />
          </Body>
        </CardItem>
      </Card>
    </View>

  )
}

const styles = StyleSheet.create({})

export default withNavigation(FactionCard);