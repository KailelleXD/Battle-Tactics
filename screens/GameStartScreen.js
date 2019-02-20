import React, { Component } from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { PhysConsumer } from "../storage/physContext";
import PinchZoomView from "../utils/PinchZoomView";
import Detachment from "../components/Detachment/Detachment";
import TerrainPlacement from "../components/TerrainComponents/TerrainPlacement";
import SandDunes from "../graphics/maps/SandDunes.png";
import RockFormations from "../graphics/maps/RockFormations.png";
import DustPlains from "../graphics/maps/DustPlains.png";

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
                        getPixelsPerInch={context.getPixelsPerInch}
                        state={context.state}
                    >
                        <View>
                            <Detachment style={{ zIndex: 99 }} />
                            <TerrainPlacement style={{ zIndex: 0 }} />
                            <ImageBackground
                                source={SandDunes}
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
