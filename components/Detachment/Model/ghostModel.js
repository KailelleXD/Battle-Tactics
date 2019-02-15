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

        console.log(this.props.position);
    }

    render() {
        return (
            <View style={[{
              transform: [
                { translateX: 0 },
                { translateY: 0 }
              ]
            },
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
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: MODEL_RADIUS,
    marginTop: ON_TOUCH_MODEL_OFFSET,
    marginLeft: ON_TOUCH_MODEL_OFFSET,
    padding: 0,
    backgroundColor: '#d5c68e',
    opacity: 0.8
  }
})

