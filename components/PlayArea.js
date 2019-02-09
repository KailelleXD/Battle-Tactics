import React, { Component } from "react";
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    PanResponder,
    Animated,
    TouchableWithoutFeedback
} from "react-native";

let Window = Dimensions.get("window");
const SCREEN_WIDTH = Window.width;

export default class PlayArea extends Component {
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
    
    lastTap = null;
    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
            this.toggleLike();
            console.log("DoubleTap!");
        } else {
            this.lastTap = now;
            console.log("no Doubletap.");
        }
    };

    state = {
        zoom: false,
      };
    
    toggleLike = () => this.setState(state => ({ zoom: !state.zoom }));


    renderModels() {
        return (
            <Animated.View {...this.panResponder.panHandlers}>
                {/* <TouchableWithoutFeedback onPress={this.handleDoubleTap}> */}
                    <Image
                        style={this.state.zoom ? styles.mapStyleZoom : styles.mapStyle}
                        source={require("../graphics/temp/fullsize4x6gridModified.png")}
                    />
                {/* </TouchableWithoutFeedback> */}
            </Animated.View>
        );
    }

    render() {
        return <View>{this.renderModels()}</View>;
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: "center",
        justifyContent: "center"
    },
    mapStyle: {
        height: Window.height,
        width: Window.width
    },
    mapStyleZoom: {
        height: Window.height * 4,
        width: Window.Width * 4
    }
});
