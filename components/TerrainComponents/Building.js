import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    Animated,
    PanResponder
} from "react-native";

let Window = Dimensions.get("window");
const SCREEN_WIDTH = Window.width;
const ONE_INCH = SCREEN_WIDTH / 48;

// In Warhammer 1 inch represents 60 inches (1:60 scale)
// AKA 1 inch is 5ft.

// let feetWidth = 12; // this.props.feetWidth
// let feetHeight = 15; // this.props.feetHeight

// let width = ONE_INCH * feetWidth;
// let height = ONE_INCH * feetHeight;

const BG_COLOR = "#700F1C"; // this.props.bgColor
const BORDER_COLOR = "#D4717F"; // this.props.borderColor

export default class Building extends Component {
    constructor(props) {
        super(props);

        // Convert props passed in as feet into proper scale for map.
        const WIDTH =  ONE_INCH * this.props.feetWidth;
        const HEIGHT = ONE_INCH * this.props.feetHeight;

        this.width = WIDTH;
        this.height = HEIGHT;
    
        const unit = { x: 0, y: 0 }; // this.props.unit;
        const position = new Animated.ValueXY({ x: unit.x, y: unit.y });
        position.addListener(value => (this.val = value));
    
        this.unit = unit;
        this.val = { x: unit.x, y: unit.y };
        this.position = position;
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onShouldBlockNativeResponder: (event, gesture) => false,
            onPanResponderTerminationRequest: (event, gesture) => false
        });
    }

    _handleStartShouldSetPanResponder = (event, gesture) => true;

    _handlePanResponderGrant = (event, gesture) => {
        (this.localStartX = event.nativeEvent.touches[0].pageX),
            (this.localStartY = event.nativeEvent.touches[0].pageY);

        this.position.setOffset({
            x: this.val.x,
            y: this.val.y
        });
    };

    _handlePanResponderMove = (event, gesture) => {
        if (gesture.numberActiveTouches === 1) {
            this.position.setValue({
                x: gesture.dx / this.props.state.scale,
                y: gesture.dy / this.props.state.scale
            });
        } // END_IF
    };

    _handlePanResponderEnd =  (event, gesture) => {}

    renderBuildings() {
        return (
            <Animated.View
                    style={[this.position.getLayout()]}
                    {...this.panResponder.panHandlers}
                    
                >
                    <View 
                        // onTouchStart={this.handleDoubleTap}
                        style={[
                            styles.buildingStyle,
                            {
                                width: this.width,
                                height: this.height, 
                            }
                            ]}
                    />
            </Animated.View>
        )
    }


    render() {
        return (
            <View style={[styles.mainContainer]}>
                <Text style={styles.textStyle} />
                {this.renderBuildings()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: Window.height,
        width: Window.width,
        top: 0,
        left: 0
    },
    buildingStyle: {
        backgroundColor: BG_COLOR,
        borderColor: BORDER_COLOR,
        borderRadius: 12,
        borderWidth: 6,
        opacity: 0.75
    },
});
