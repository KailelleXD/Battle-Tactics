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
                                />
                        ))}
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
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center"
    },
    modelPurple: {
        backgroundColor: "#FF00FF"
    },
    modelKiwi: {
        backgroundColor: "#FFFF00",
    },
    modelAqua: {
        backgroundColor: "#00FFFF"
    },
    modelRed: {
        backgroundColor: "#FF0000"
    },
    modelGreen: {
        backgroundColor: "#00FF00"
    },
    modelBlue: {
        backgroundColor: "#0000FF"
    }
});
