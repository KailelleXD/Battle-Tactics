import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GhostModel from '../Model/GhostModel';
import { 
    View,
    Text,
    Animated,
    PanResponder,
    Dimensions
} from 'react-native';

// this.props.calcDistance();
// this.props.getStartXY(x, y);
// this.props.getEndXY(x, y);
// this.props.calcDistance();

let Window = Dimensions.get('window');
const SCREEN_WIDTH = Window.width;
const MODEL_RADIUS = SCREEN_WIDTH / 48;
const ON_TOUCH_MULTIPLIER = 6;
const ON_TOUCH_MODEL_OFFSET = (MODEL_RADIUS*ON_TOUCH_MULTIPLIER - MODEL_RADIUS)/2;
const ON_TOUCH_MODEL_HIGHLIGHT = MODEL_RADIUS*ON_TOUCH_MULTIPLIER;

this.ON_TOUCH_MODEL_HIGHLIGHT = ON_TOUCH_MODEL_HIGHLIGHT;
export default class Model extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onTouch: false,
            ghostModel: false,
            resetPosition: false,
        }

        const unit = this.props.playerState.units.filter(item => item.id === this.props.id)[0];
        const position = new Animated.ValueXY({x: unit.x, y: unit.y });

        this.val = { x: unit.x, y: unit.y }
        position.addListener((value) => this.val = value);
        
        this.unit = unit;
        this.movement = unit.m;
        this.position = position;
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminationRequest: (event, gesture) => false,
        });
    }

    _handleStartShouldSetPanResponder = (event, gesture) => {
        console.log("You are now touching the model component.");
        this.setState({
            onTouch: true,
            ghostModel: true
        })
        return true;
    }

    _handlePanResponderGrant = (event, gesture) => {
        this.props.getStartXY(event.nativeEvent.touches[0].pageX, event.nativeEvent.touches[0].pageY);
        this.position.setOffset({
            x: this.val.x,
            y: this.val.y 
        });
    }

    _handlePanResponderMove = (event, gesture) => {
        // Single Touch moves the Model.js component.
        if (gesture.numberActiveTouches === 1) {
            this.position.setValue({
                x: gesture.dx / this.props.state.scale, 
                y: gesture.dy / this.props.state.scale 
            })

            // Only calc distance if 1 finger is touching the screen.
            this.props.calcDistance(gesture);
        } // END_IF

        // Two Finger touch places component in 'reset' state.
        if (gesture.numberActiveTouches === 2 && this.state.resetPosition === false) {
            console.log("Reset State has been activated!");

            // Set 'resetPosition' to true. to prevent this code from firing more than once.
            this.setState({
                resetPosition: true,
            }, () => console.log("resetPosition: " + this.state.resetPosition))

            // Change the OFFSET of the 'position' object to visually show that this component will be reset back to it's prior position.
            this.position.setOffset({
                x: this.unit.x - gesture.dx / this.props.state.scale,
                y: this.unit.y - gesture.dy / this.props.state.scale
            })

            // Find out what the value of X and Y are in the above position offset.

            // Store those values in local state.

            // Use setState CB function to call a helper function that will take those values and set them into the correct model.json data.

            // This should resolve my issues..


        } // END_IF    
    }

    _handlePanResponderEnd =  (event, gesture) => {
        this.props.getEndXY(event.nativeEvent.pageX, event.nativeEvent.pageY);
        console.log("You are no longer touching the model component.")
        this.setState({
            onTouch: false,
            ghostModel: false
        })
        this.updateModelLocation(gesture);
        this.props.calcDistance(gesture);
        this.props.clearEndXY();
    }

    // HELPER FUNCTIONS ////

    updateModelLocation (gesture) {
        const oldUnits = [...this.props.playerState.units];
        const updatedUnits = oldUnits.map(unit => {
            if (unit.id === this.props.id) {
                const newUnit = {...unit};
                newUnit.x = unit.x + gesture.dx / this.props.state.scale;
                newUnit.y = unit.y + gesture.dy / this.props.state.scale;
                return newUnit;
            } else {
                return unit;
            }
        });
        
        this.props.updateUnits(updatedUnits);
    }

    // STYLE FUNCTIONS ////
    
    onTouchModelStyle () {
        if (this.state.onTouch === true) {
            return styles.onTouch;            
        } else {
            return styles.model;
        }
    }
    
    maxMovementStyle () {
        if (this.props.state.inches <= this.movement && this.state.onTouch) {
            // Border Color should be Red!
            return styles.overMaxDistance;
        } else if (this.props.state.inches >= this.movement && this.state.onTouch) {
            // Border Color should be Green!
            return styles.underMaxDistance;
        } else {
            return styles.offTouch;
        }
    }

    // RENDER FUNCTIONS ////
    
    placeGhostModel () {
        if (this.state.onTouch === true) {
            return (
                <GhostModel val={this.val} modelStyle={styles[this.props.model, styles.model]} />
            )
        } else if (this.state.onTouch === false) {

        }
    }

    renderModels() {
        return (
            <Animated.View
                style={[this.position.getLayout(), this.onTouchModelStyle(), this.maxMovementStyle(), this.props.model]}
                {...this.panResponder.panHandlers}
            >
            </Animated.View>
        )
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                {this.renderModels()}
                {this.placeGhostModel()}
            </View>
        )
    }
}

const styles = {
    text: {
        paddingTop: 4,
        fontWeight: '800',
        textAlign: 'center',
        color: '#fff'
        },
    mainContainer: {
        flex: 1,
        height: Window.height,
        width: Window.width,
        top: 0,
        left: 0
        // top: 40,
        // left: Window.width / 2 - MODEL_RADIUS / 2
    },
    model: {
        width: MODEL_RADIUS,
        height: MODEL_RADIUS,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: MODEL_RADIUS,
        marginTop: ON_TOUCH_MODEL_OFFSET,
        marginLeft: ON_TOUCH_MODEL_OFFSET,
        padding: 0
    },
    onTouch: {
        width: this.ON_TOUCH_MODEL_HIGHLIGHT,
        height: this.ON_TOUCH_MODEL_HIGHLIGHT,
        margin: 0,
        padding: 0,
        opacity: 0.6,
    },
    offTouch: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: MODEL_RADIUS,
        opacity: 1.0
    },
    underMaxDistance: {
        backgroundColor: '#fff',
        borderColor: '#f00',
        borderWidth: 6,
        borderRadius: this.ON_TOUCH_MODEL_HIGHLIGHT,
    },
    overMaxDistance: {
        backgroundColor: '#fff',
        borderColor: '#0f0',
        borderWidth: 2,
        borderRadius: this.ON_TOUCH_MODEL_HIGHLIGHT,
    }
};