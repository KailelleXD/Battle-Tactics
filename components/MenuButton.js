import React, {Component} from 'react';
import {Animated, TouchableHighlight, View} from "react-native";
import { Fab, Icon, Button } from 'native-base';
// import Icon from '@expo/vector-icons/FontAwesome';
const SIZE = 80;
class MenuButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: 'true'
        };
    }


    mode = new Animated.Value(0);
    toggleView = () => {
        Animated.timing(this.mode, {
            toValue: this.mode._value === 0 ? 1 : 0,
            duration: 300
        }).start();
    };

    render() {
        const firstX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -30]
        });
        const firstY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
        });
        const secondX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 20]
        });
        const secondY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50]
        });
        const thirdX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 70]
        });
        const thirdY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -30]
        });
        const opacity = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });
        return (
        //     <Fab
        //     active={this.state.active}
        //     direction="up"
        //     containerStyle={{ }}
        //     style={{ backgroundColor: '#e5b83b' }}
        //     // position="bottomRight"
        //     onPress={() => this.setState({ active: !this.state.active })}>
        //     <Icon name="arrow-dropup-circle" />
        //     <Button style={{ backgroundColor: '#34A34F' }}>
        //       <Icon name="logo-whatsapp" />
        //     </Button>
        //     <Button style={{ backgroundColor: '#3B5998' }}>
        //       <Icon name="logo-facebook" />
        //     </Button>
        //     <Button disabled style={{ backgroundColor: '#DD5144' }}>
        //       <Icon name="mail" />
        //     </Button>
        //   </Fab>

            <View style={{
                position: 'absolute',
                alignItems: 'center'
            }}>
                <Animated.View style={{
                    position: 'absolute',
                    left: firstX,
                    top: firstY,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: '#e5b83b'
                        }}
                    >
                        <Icon 
                            name="cube" 
                            style={{color: "#ffffff"}}
                        />
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: secondX,
                    top: secondY,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: '#e5b83b'
                        }}
                    >
                        <Icon 
                            name="filing" 
                            style={{color: "#ffffff"}}
                        />
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: thirdX,
                    top: thirdY,
                    opacity
                }}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: '#e5b83b'
                        }}
                    >
                        <Icon 
                            name="archive" 
                            style={{color: "#ffffff"}}
                        />
                    </TouchableHighlight>
                </Animated.View>
                <TouchableHighlight
                    onPress={this.toggleView}
                    underlayColor="#2882D8"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE,
                        height: SIZE,
                        borderRadius: SIZE / 2,
                        backgroundColor: '#e5b83b'
                    }}
                >
                    <Animated.View style={{
                        transform: [
                            {rotate: rotation}
                        ]
                    }}>
                        <Icon 
                            name="arrow-dropup-circle" 
                            style={{color: "#ffffff"}}
                        />
                    </Animated.View>
                </TouchableHighlight>
            </View>
        );
    }
}
export default MenuButton;