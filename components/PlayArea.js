import React, { Component } from 'react'
import { 
    Image, 
    StyleSheet, 
    Animated,
    PanResponder,
    TouchableWithoutFeedback
} from 'react-native'
export default class PlayArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isZoomedOut: true
        }

        const position = new Animated.ValueXY();

        this.val = { x:0, y:0 }
        position.addListener((value) => this.val = value);

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gesture) => {
                if (gesture.numberActiveTouches > 1) {
                    return true;
                } else {
                    return false;
                }
            },
            onPanResponderGrant: (event, gesture) => {
                this.position.setOffset(this.position.__getValue());
                // this.position.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: (event, gesture) => {
                if (this.state.isZoomedOut === false) {
                    console.log(gesture)
                    position.setValue({ x: gesture.dx, y: gesture.dy })
                }
            },
            onPanResponderRelease: (event, gesture) => {
                // position.setValue({ x: gesture.dx, y: gesture.dy })
                this.position.flattenOffset()
            }
        });

        this.panResponder = panResponder;
        this.position = position;

    }

    lastTap = null;
    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
            this.toggleLike();
            // console.log("DoubleTap!");
        } else {
            this.lastTap = now;
            // console.log("no Doubletap.");
        }
    };

    toggleLike = () => {
        this.setState(previousState => (
            { isZoomedOut: !previousState.isZoomedOut }
        ))
        // console.log(this.state.isZoomedOut);
        if (this.state.isZoomedOut === false) {    
            Animated.spring(this.position, {
                toValue: { x: 0, y: 0 }
            }).start()
        }
    }

render() {
    return (
        <Animated.View
            style={[this.position.getLayout(), styles.containerStyle]}
            {...this.panResponder.panHandlers}
        >
        <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
            <Image style={this.state.isZoomedOut ? styles.zoomOut : styles.zoomIn} source={require('../graphics/temp/fullsize4x6grid25pct.png')} />
        </TouchableWithoutFeedback>
        </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    zoomIn: {
        transform: [
            {scaleX: 1},
            {scaleY: 1}
        ]
    },
    zoomOut: {
        transform: [
            {scaleX: 0.47},
            {scaleY: 0.47}
        ]
    }
})
