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
                                {context.state.playerTwo.units.map(modelP2 => (
                                <Model 
                                    id={modelP2.id} 
                                    key={modelP2.id} 
                                    modelP1={styles[modelP2.style]}
                                    movement={modelP2.m}
                                    playerState={context.state.playerTwo}
                                    updateUnits={context.updateP2Units}
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
                                {context.state.playerOne.units.map(modelP1 => (
                                <Model 
                                    id={modelP1.id} 
                                    key={modelP1.id} 
                                    modelP2={styles[modelP1.style]}
                                    movement={modelP1.m}
                                    playerState={context.state.playerOne}
                                    updateUnits={context.updateP1Units}
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
        backgroundColor: "#600060"
    },
    modelKiwi: {
        backgroundColor: "#606000",
    },
    modelAqua: {
        backgroundColor: "#006060"
    },
    modelRed: {
        backgroundColor: "#600000"
    },
    modelGreen: {
        backgroundColor: "#006000"
    },
    modelBlue: {
        backgroundColor: "#000060"
    },
    modelLtPurple: {
        backgroundColor: "#ca80ca"
    },
    modelLtKiwi: {
        backgroundColor: "#caca80",
    },
    modelLtAqua: {
        backgroundColor: "#80caca"
    },
    modelLtRed: {
        backgroundColor: "#ca8080"
    },
    modelLtGreen: {
        backgroundColor: "#80ca80"
    },
    modelLtBlue: {
        backgroundColor: "#8080ca"
    }
});
