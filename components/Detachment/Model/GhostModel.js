import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";


let Window = Dimensions.get('window');
const SCREEN_WIDTH = Window.width;
const MODEL_RADIUS = SCREEN_WIDTH / 48;
const ON_TOUCH_MULTIPLIER = 6;
const ON_TOUCH_MODEL_OFFSET = (MODEL_RADIUS*ON_TOUCH_MULTIPLIER - MODEL_RADIUS)/2;

export default class ghostModel extends Component {
    constructor(props) {
        super(props);

        this.val = {...this.props.val};      

      }
      
    render() {
        return (
            <View style={[{
          transform: [
            { translateX: this.val.x },
            { translateY: this.val.y }
          ]},
              styles.positionStyle
            ]}>
              <View style={styles.ghostStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  positionStyle: {
    position: 'absolute'
  },
  ghostStyle: {
    width: MODEL_RADIUS,
    height: MODEL_RADIUS,
    borderColor: '#dfdfdf',
    borderWidth: 2,
    borderRadius: MODEL_RADIUS,
    marginTop: ON_TOUCH_MODEL_OFFSET,
    marginLeft: ON_TOUCH_MODEL_OFFSET,
    padding: 0,
    backgroundColor: '#f5aDfe',
    opacity: 1.0
  }
})

