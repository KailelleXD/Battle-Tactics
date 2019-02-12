import React, { Component } from 'react';
import { 
    View,
    Text,
    Animated,
    PanResponder,
    Dimensions
} from 'react-native';

let Window = Dimensions.get('window');
const SCREEN_WIDTH = Window.width;
let MODEL_RADIUS = SCREEN_WIDTH / 12;

export default class Model extends Component {
    constructor(props) {
        super(props);


        const unit = this.props.playerState.units.filter(item => item.id === this.props.id)[0];
        const position = new Animated.ValueXY({x: unit.x, y: unit.y });


        this.val = { x: unit.x, y: unit.y }
        position.addListener((value) => this.val = value);

        const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: (event, gesture) => {
            this.position.setOffset({
              x: this.val.x,
              y: this.val.y
            });
            console.log(gesture);
          },
        onPanResponderMove: (event, gesture) => {
            console.log("*** gesture of model that is being moved ***");
            console.log(gesture);
            position.setValue({ x: gesture.dx, y: gesture.dy })
        },
        onPanResponderRelease: (event, gesture) => {
            this.updateModelLocation(gesture);
        },
        onPanResponderTerminationRequest: (evnt, gesture) => false,

        });

        this.panResponder = panResponder;
        this.position = position;

    }

    updateModelLocation (gesture) {
        const oldUnits = [...this.props.playerState.units];
        const updatedUnits = oldUnits.map(unit => {
            if (unit.id === this.props.id) {
                const newUnit = {...unit};
                newUnit.x = unit.x + gesture.dx;
                newUnit.y = unit.y + gesture.dy;
                return newUnit;
            } else {
                return unit;
            }
        });

        this.props.updateUnits(updatedUnits);
    }

    renderModels() {
        return (
            <Animated.View
                style={[this.position.getLayout(), styles.model, this.props.model]}
                {...this.panResponder.panHandlers}
            >
               <Text style={styles.text}>{this.props.name}</Text>
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
        margin: 0,
        padding: 0
    }
};


