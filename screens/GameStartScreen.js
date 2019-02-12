import React, { Component } from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { AppConsumer } from "../storage/AppContext";
import PinchZoomView from "../utils/PinchZoomView";
import Detachment from "../components/Detachment/Detachment";
import MapGrid from "../graphics/temp/fullsize4x6grid15.png";

const Window = Dimensions.get("window");
const SCREEN_WIDTH = Window.width;
const SCREEN_HEIGHT = SCREEN_WIDTH * 1.5;

export default class GameStartScreen extends Component {
    render() {
        return (
            <AppConsumer>
                {(context) => (
                    <PinchZoomView>
                        <Detachment 
                            style={{ zIndex: 99 }} />
                        <ImageBackground
                            source={MapGrid}
                            style={{
                                width: SCREEN_WIDTH,
                                height: SCREEN_HEIGHT,
                                zIndex: -5
                            }}
                        />
                    </PinchZoomView>
                )}
            </AppConsumer>
        );
    }
}
