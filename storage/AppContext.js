import React from 'react';
import { AsyncStorage } from 'react-native';
import models from "../utils/data/models.json";

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     playerOne: {
        //         name: "jack",
        //         mapName: "",
        //         terrain: [],
        //         faction: "",
        //         units: [],
        //         points: 0,
        //         randomStart: false
        //     },
        //     playerTwo: {
        //         name: "jill",
        //         mapName: "",
        //         terrain: [],
        //         faction: "",
        //         units: [],
        //         points: 0,
        //         randomStart: false
        //     },
        // }

    const initialState = {
        playerOne: {
            name: "jack",
            deploymentArea: "",
            faction: "",
            units: models,
            unitPlacement: [],
            points: 0,
            randomStart: false
        },
        playerTwo: {
            name: "jill",
            // mapName: "",
            // terrain: [],
            faction: "",
            units: [],
            points: 0,
            // test: "**** TESTER ****",
            randomStart: false
        },
        gameData: {
            mapName: "",
            terrain: [],
        },
        modelData: {
            msg: "save data from model movement",
            data: {}
        }
    }

    let allPlayers = {}

    AsyncStorage.getItem("Game7").then((value) => {


        if (!value) {
            allPlayers = initialState
            AsyncStorage.setItem('Game7', JSON.stringify(initialState))

        } else {
            allPlayers = JSON.parse(value)

        }

        this.setState(allPlayers)
    })

    }

    setName = (newName) => {
      const playerOne = {...this.state.playerOne}
      playerOne.name = newName
        this.setState( {playerOne}, () => {
            AsyncStorage.setItem('Game7',JSON.stringify(this.state))
        })

    }

    setFaction = (newFaction) => {
      const playerOne = {...this.state.playerOne}
      playerOne.faction = newFaction
        this.setState( {playerOne} );
    }

    setMap = (newMap) => {
      const gameData = {...this.state.gameData}
      gameData.mapName = newMap
        this.setState( {gameData} )
    }

    setDeploymentArea = (newDeploymentArea) => {
      const playerOne = {...this.state.playerOne}
      playerOne.deploymentArea = newDeploymentArea
        this.setState( {playerOne} )
    }

    addTerrainObject = (newTerrainObject) => {
      const gameData = {...this.state.gameData}
      gameData.terrain = gameData.terrain.concat(newTerrainObject);
        this.setState( {gameData} )
    }

    addUnitPlacementObject = (newUnitPlacementObject) => {
      const playerOne = {...this.state.playerOne}
      playerOne.unitPlacement = playerOne.unitPlacement.concat(newUnitPlacementObject);
      // playerone.units = playerOne.units.slice( { id: newUnitPlacementObject.id } );
        this.setState( {playerOne} )
    }

    setUnit = (newUnit) => {
        const playerOne = {...this.state.playerOne}
        playerOne.units = playerOne.units.concat(newUnit);
          this.setState( {playerOne} );
    }

    updateUnits = (newUnits) => {
        const playerOne = {...this.state.playerOne};
        playerOne.units = newUnits;
        this.setState({ playerOne });
    }

    render () {
        return (
            <AppContext.Provider value={{
                state: this.state,
                setName: this.setName,
                setMap: this.setMap,
                addTerrainObject: this.addTerrainObject,
                setFaction: this.setFaction,
                setUnit: this.setUnit,
                updateUnits: this.updateUnits,
                setDeploymentArea: this.setDeploymentArea,
                addUnitPlacementObject: this.addUnitPlacementObject
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}