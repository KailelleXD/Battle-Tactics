import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Model from "./Model/Model";
import { AppConsumer } from "../../storage/AppContext";

import models from "../../utils/data/models.json";


export default class Detachment extends React.Component {
    state = {
        models: models
    }

    
    render() {

        return (
            <AppConsumer>
                {(context) => (
                    <View style={styles.container}>
                        {/* {console.log(context.state.playerOne.units)} */}
                        {context.state.playerOne.units.map(model => (
                        <Model 
                            id={model.id} 
                            key={model.id} 
                            model={styles[model.style]}
                            name={model.text}
                            playerState={context.state.playerOne}
                            updateUnits={context.updateUnits}
                            state={context.state} />
                    ))}
                    </View>
                )}
            </AppConsumer>
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
