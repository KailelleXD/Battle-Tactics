import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";


let Window = Dimensions.get('window');
const SCREEN_WIDTH = Window.width;
const MODEL_RADIUS = SCREEN_WIDTH / 48;
const ON_TOUCH_MULTIPLIER = 6;
const ON_TOUCH_MODEL_OFFSET = (MODEL_RADIUS*ON_TOUCH_MULTIPLIER - MODEL_RADIUS)/2;

export default class WeaponRange extends Component {
    constructor(props) {
        super(props);

        this.val = {...this.props.val};    
    }
    
    // range * this.props.ppi

    // Component Lifecycle functions ////

    componentDidMount() {
        console.log("name: " + this.props.weapons);
        console.log("range: " + this.props.range);
        console.log("ppi: " + this.props.ppi);
    }

    // Helper functions ////

    // I need a helper function that my render function will call, that calculates the given range of the weapon to scale.

    // Render functions ////

    // I need a render function that checks to see how many elements are in the weapons array and then instantiates the required number with the correct values in their inline styles.

    // using .map iterate through the array assigned to 'this.props.range' and return a component for each element in the array.

    // Style functions ////

    // weaponOverlayStyle () {
    //     return (

    //     )
    // }

    // Render component ////

    render() {
        return (
            <View style={[{
          transform: [
            // { translateX: this.val.x },
            // { translateY: this.val.y }
          ]},
              styles.positionStyle
            ]}>
              {this.props.range.map((range, i) => <View key={i} 
                                                        style={[{
                                                            transform: [
                                                                // { translateX: this.val.x },
                                                                // { translateY: this.val.y }
                                                            ]},
                                                            {
                                                            width: range * this.props.ppi,
                                                            height: range * this.props.ppi,
                                                            borderWidth: 1,
                                                            borderColor: '#808080',
                                                            borderRadius: range * this.props.ppi,
                                                            zIndex: 0,
                                                            opacity: 0.25,
                                                            backgroundColor: '#ff2525',
                                                            marginTop: (range * this.props.ppi)/2,
                                                            marginLeft: (range * this.props.ppi)/2,
                                                        },
                                                            // styles.positionStyle
                                                        ]}/>
                                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  positionStyle2: {
    position: 'relative'
  },    
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

