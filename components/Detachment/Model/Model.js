import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
const ON_TOUCH_MULTIPLIER = 4.5;
const ON_TOUCH_MODEL_OFFSET = (MODEL_RADIUS*ON_TOUCH_MULTIPLIER - MODEL_RADIUS)/2;
const ON_TOUCH_MODEL_HIGHLIGHT = MODEL_RADIUS*ON_TOUCH_MULTIPLIER;

this.ON_TOUCH_MODEL_HIGHLIGHT = ON_TOUCH_MODEL_HIGHLIGHT;
export default class Model extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onTouch: false
        }

        // this.ON_TOUCH_MODEL_HIGHLIGHT *= this.props.state.scale;

        const unit = this.props.playerState.units.filter(item => item.id === this.props.id)[0];
        const position = new Animated.ValueXY({x: unit.x, y: unit.y });

        this.val = { x: unit.x, y: unit.y }
        position.addListener((value) => this.val = value);

        const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (event, gesture) => {
            // console.log("I'm being touched!!!");
            this.setState({
                onTouch: true
            })
            return true;
        },
        onPanResponderGrant: (event, gesture) => {
            // console.log("On Press: " + event.nativeEvent.touches[0].pageX + " | " + event.nativeEvent.touches[0].pageY);
            this.props.getStartXY(event.nativeEvent.touches[0].pageX, event.nativeEvent.touches[0].pageY);
            this.position.setOffset({
                // x: this.val.x,
                // y: this.val.y 
                x: this.val.x,
                y: this.val.y 
            });
            // console.log(gesture);
          },
        onPanResponderMove: (event, gesture) => {
            // console.log(this.props.state.scale)
            // console.log("onTouch state: " + this.state.onTouch)
            if (gesture.numberActiveTouches === 1) {
                position.setValue({
                    x: gesture.dx / this.props.state.scale, 
                    y: gesture.dy / this.props.state.scale 
                })
            }
            this.props.calcDistance(gesture);
        },
        onPanResponderRelease: (event, gesture) => {
            // console.log("On Release: " + event.nativeEvent.pageX + " | " + event.nativeEvent.pageY);
            this.props.getEndXY(event.nativeEvent.pageX, event.nativeEvent.pageY);
            // console.log("I'm no longer being touched!")
            this.setState({
                onTouch: false
            })
            this.updateModelLocation(gesture);
            this.props.calcDistance(gesture);
            this.props.clearEndXY();
        },
        onPanResponderTerminationRequest: (event, gesture) => false,

        });

        this.panResponder = panResponder;
        this.position = position;

    }

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

    onTouchModelStyle () {
        if (this.state.onTouch === true) {
            return styles.onTouch;
            // return styles.model;

        } else {
            return styles.model;
        }
    }

    renderModels() {
        return (
            // <Animated.View
            //     style={[this.position.getLayout(), this.onTouchModelStyle(this.onTouch), this.props.model]}
            //     {...this.panResponder.panHandlers}
            // >
            <Animated.View
                style={[this.position.getLayout(), this.onTouchModelStyle(), this.props.model]}
                {...this.panResponder.panHandlers}
            >
            </Animated.View>
        )
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.renderModels()}
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
        borderWidth: 2,
        borderRadius: MODEL_RADIUS,
        marginTop: ON_TOUCH_MODEL_OFFSET,
        marginLeft: ON_TOUCH_MODEL_OFFSET,
        padding: 0
    },
    onTouch: {
        width: this.ON_TOUCH_MODEL_HIGHLIGHT,
        height: this.ON_TOUCH_MODEL_HIGHLIGHT,
        backgroundColor: '#fff',
        borderColor: '#0f0',
        borderWidth: 2,
        borderRadius: this.ON_TOUCH_MODEL_HIGHLIGHT,
        margin: 0,
        padding: 0,
        opacity: 0.75,
    },
};


