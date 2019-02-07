import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Model from "./Model/Model";

const ROSTER = [
  { id: 1, text: 'HQ', color: '#808000'},
  { id: 2, text: 'El', color: '#800000'},
  { id: 3, text: 'El', color: '#800000'},
  { id: 4, text: 'S', color: '#000080'},
  { id: 5, text: 'S', color: '#000080'},
  { id: 6, text: 'S', color: '#000080'},
  { id: 7, text: 'S', color: '#000080'},
  { id: 8, text: 'S', color: '#000080'},
];

export default class Detachment extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Model model={styles.modelKiwi} name={"HQ"} />
                <Model model={styles.modelRed} name={"El"} />
                <Model model={styles.modelRed} name={"El"} />
                <Model model={styles.modelBlue} name={"S"} />
                <Model model={styles.modelBlue} name={"S"} />
                <Model model={styles.modelBlue} name={"S"} />
                <Model model={styles.modelBlue} name={"S"} />
                <Model model={styles.modelBlue} name={"S"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
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
