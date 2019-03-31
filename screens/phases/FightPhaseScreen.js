import React, { Component } from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { PhysConsumer } from "../../storage/physContext";
import PinchZoomView from "../../utils/PinchZoomView";
import Detachment from "../../components/Detachment/Detachment";
import TerrainPlacement from "../../components/TerrainComponents/TerrainPlacement";

const Window = Dimensions.get("window");
const SCREEN_WIDTH = Window.width;
const SCREEN_HEIGHT = SCREEN_WIDTH * 1.5;

export default class FightPhaseScreen extends Component {
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
                        </View>
                    </PinchZoomView>
                )}
            </PhysConsumer>
        );
    }
}
