import React from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { PhysConsumer } from "../../storage/physContext";
import Building from "./Building";
import SandDunes from "../../graphics/maps/SandDunes.png";

const Window = Dimensions.get("window");
const SCREEN_WIDTH = Window.width;
const SCREEN_HEIGHT = SCREEN_WIDTH * 1.5;

let feetWidth = 12;
let feetHeight = 10;

export default class TerrainPlacement extends React.Component {
    render() {
        return (
            <PhysConsumer>
                {PhysContext => (
                    <View>
                        <Building 
                            state={PhysContext.state}
                            feetWidth={feetWidth}
                            feetHeight={feetHeight}
                            />
                        <ImageBackground
                                source={SandDunes}
                                style={{
                                    width: SCREEN_WIDTH,
                                    height: SCREEN_HEIGHT,
                                    zIndex: -5,
                                }}
                            />
                    </View>
                )}
            </PhysConsumer>
        );
    }
}
