import React, { Component } from "react";
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native";

let Window = Dimensions.get("window");
const SCREEN_WIDTH = Window.width;

export default class PlayArea extends Component {
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
        liked: true,
      };
    
    toggleLike = () => this.setState(state => ({ liked: !state.liked }));

    renderModels() {
        return (
            <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
                <Image
                    style={this.state.liked ? styles.mapStyle : styles.mapStyleZoom}
                    source={require("../graphics/temp/fullsize4x6gridModified.png")}
                />
            </TouchableWithoutFeedback>
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
