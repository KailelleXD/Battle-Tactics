import React, { Component } from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { PhysConsumer } from "../storage/physContext";
import PinchZoomView from "../utils/PinchZoomView";
import Detachment from "../components/Detachment/Detachment";
import MapGrid from "../graphics/maps/SandDunes.png";

const Window = Dimensions.get("window");
const SCREEN_WIDTH = Window.width;
const SCREEN_HEIGHT = SCREEN_WIDTH * 1.5;

export default class GameStartScreen extends Component {
    render() {
        return (
            <PhysConsumer>
                {(context) => (
                    <PinchZoomView 
                        updateOffset={context.updateOffset}
                        updateScale={context.updateScale}
                        updateLast={context.updateLast}
                        updateDistant={context.updateDistant}
                        updateMaxOffset={context.updateMaxOffset}
                        state={context.state}
                    >
                        <View>
                            <Detachment style={{ zIndex: 99 }} />
                            <ImageBackground
                                source={MapGrid}
                                style={{
                                    width: SCREEN_WIDTH,
                                    height: SCREEN_HEIGHT,
                                    zIndex: -5,
                                }}
                            />
                        </View>
                    </PinchZoomView>
                )}
            </PhysConsumer>
        );
    }
}
