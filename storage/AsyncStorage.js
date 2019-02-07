import React, {
    Component
} from 'react';
import {
    AsyncStorage
} from 'react-native';

const initialState = {
    playerOne: {
        name: "jack",
        mapName: "",
        terrain: [],
        faction: "",
        units: [],
        points: 0,
        randomStart: false
    },
    playerTwo: {
        name: "jill",
        mapName: "",
        terrain: [],
        faction: "",
        units: [],
        points: 0,
        randomStart: false
    },
}

export const getItem = () => {

    let allPlayers = {}

    AsyncStorage.getItem('playerAll').then((value) => {

        if (!value) {
            allPlayers = initialState
            AsyncStorage.setItem('playerAll', JSON.stringify(initialState))

        } else {
            allPlayers = JSON.parse(value)
        }

        this.setState(allPlayers);
        // return allPlayers;
    })

}