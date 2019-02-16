import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Model from "./Model/Model";
import { AppConsumer } from "../../storage/AppContext";
import { PhysConsumer } from '../../storage/physContext';

import models from "../../utils/data/models.json";


export default class Detachment extends React.Component {
    state = {
        models: models
    }

    
    render() {

        return (
            <PhysConsumer>
                {(PhysContext) => (
                <AppConsumer>
                    {(context) => (
                        <View>
                            <View style={styles.container}>
                                {context.state.playerOne.units.map(model => (
                                <Model 
                                    id={model.id} 
                                    key={model.id} 
                                    model={styles[model.style]}
                                    movement={model.m}
                                    playerState={context.state.playerOne}
                                    updateUnits={context.updateUnits}
                                    state={PhysContext.state} 
                                    calcDistance={PhysContext.calcDistance}
                                    getStartXY={PhysContext.getStartXY}
                                    getEndXY={PhysContext.getEndXY}
                                    clearEndXY={PhysContext.clearEndXY}
                                    getTempXY={PhysContext.getTempXY}
                                    />
                            ))}
                            </View>
                            <View style={styles.container}>
                                {context.state.playerTwo.units.map(model => (
                                <Model 
                                    id={model.id} 
                                    key={model.id} 
                                    model={styles[model.style]}
                                    movement={model.m}
                                    playerState={context.state.playerTwo}
                                    updateUnits={context.updateUnits}
                                    state={PhysContext.state} 
                                    calcDistance={PhysContext.calcDistance}
                                    getStartXY={PhysContext.getStartXY}
                                    getEndXY={PhysContext.getEndXY}
                                    clearEndXY={PhysContext.clearEndXY}
                                    getTempXY={PhysContext.getTempXY}
                                    />
                            ))}
                            </View>
                        </View>
                    )}
                </AppConsumer>
                )}
            </PhysConsumer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#caf",
        // alignItems: "center",
        // justifyContent: "center"
    },
    modelPurple: {
        backgroundColor: "#900090"
    },
    modelKiwi: {
        backgroundColor: "#909000",
    },
    modelAqua: {
        backgroundColor: "#009090"
    },
    modelRed: {
        backgroundColor: "#900000"
    },
    modelGreen: {
        backgroundColor: "#009000"
    },
    modelBlue: {
        backgroundColor: "#000090"
    },
    modelLtPurple: {
        backgroundColor: "#ca00ca"
    },
    modelLtKiwi: {
        backgroundColor: "#caca00",
    },
    modelLtAqua: {
        backgroundColor: "#00caca"
    },
    modelLtRed: {
        backgroundColor: "#ca0000"
    },
    modelLtGreen: {
        backgroundColor: "#00ca00"
    },
    modelLtBlue: {
        backgroundColor: "#0000ca"
    }
});
