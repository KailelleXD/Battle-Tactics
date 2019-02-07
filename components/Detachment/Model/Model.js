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

      const position = new Animated.ValueXY();

      this.val = { x:0, y:0 }
      position.addListener((value) => this.val = value);

      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, gesture) => {
            this.position.setOffset({
              x: this.val.x,
              y:this.val.y
            });
          },
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy })
        },
        onPanResponderRelease: (event, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy })
        }
    });

    this.panResponder = panResponder;
    this.position = position;

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
        top: 40,
        left: Window.width / 2 - MODEL_RADIUS / 2
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


