import React from "react";
import { 
    View, 
    ImageBackground, 
    Dimensions, 
    StyleSheet 
} from "react-native";
import { PhysConsumer } from "../../storage/physContext";
import Building from "./Building";
import SandDunes from "../../graphics/maps/SandDunes.png";

const Window = Dimensions.get("window");
const SCREEN_WIDTH = Window.width;
const SCREEN_HEIGHT = SCREEN_WIDTH * 1.5;

export default class TerrainPlacement extends React.Component {
    render() {
        return (
            <PhysConsumer>
                {PhysContext => (
                    <View>
                        {PhysContext.state.terrain.map((terrain, i) => (
                        <Building
                            id={terrain.id}
                            key={terrain.id}
                            terrainStyle={styles[terrain.style]}
                            terrainData={PhysContext.state.terrain}
                            terrain={PhysContext.state.terrain[i]}
                            lockStatus={PhysContext.state.terrain[i].locked}
                            updateTerrain={PhysContext.updateTerrain}
                            updateLockStatus={PhysContext.updateLockStatus}
                            state={PhysContext.state}
                            feetWidth={terrain.feetWidth}
                            feetHeight={terrain.feetHeight}
                            />
                        ))}
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

const styles = StyleSheet.create({
    terrainRed: {
        backgroundColor: "#700F1C",
        borderColor: "#D4717F"
    },
    terrainOrange: {
        backgroundColor: "#AF480B",
        borderColor: "#E38248"
    },
    terrainYellow: {
        backgroundColor: "#E0CC00",
        borderColor: "#FFF054"
    },
    terrainGreen: {
        backgroundColor: "#49C42F",
        borderColor: "#8CE47A"
    },
    terrainLime: {
        backgroundColor: "#91A437",
        borderColor: "#E8F6A4"
    },
    terrainGrass: {
        backgroundColor: "#AAAA39",
        borderColor: "#FFFFAA"
    },
    terrainBlue: {
        backgroundColor: "#2A6C96",
        borderColor: "#6EA2C3"
    },
    terrainPrune: {
        backgroundColor: "#2E4372",
        borderColor: "#7788AA"
    },
    terrainViolet: {
        backgroundColor: "#5526A6",
        borderColor: "#8A67C6"
    },
    terrainStrawberry: {
        backgroundColor: "#D11F67",
        borderColor: "#E66C9D"
    }
});
