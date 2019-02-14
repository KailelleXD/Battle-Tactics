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
                                // name={model.text}
                                playerState={context.state.playerOne}
                                updateUnits={context.updateUnits}
                                state={PhysContext.state} 
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
        backgroundColor: "#800080"
    },
    modelKiwi: {
        backgroundColor: "#808000",
    },
    modelAqua: {
        backgroundColor: "#008080"
    },
    modelRed: {
        backgroundColor: "#800000"
    },
    modelGreen: {
        backgroundColor: "#008000"
    },
    modelBlue: {
        backgroundColor: "#000080"
    }
});
