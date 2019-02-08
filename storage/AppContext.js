import React from 'react';
import { AsyncStorage } from 'react-native';

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
            mapName: "",
            deploymentArea: "",
            terrain: [],
            faction: "",
            units: [],
            unitPlacement: [],
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

    let allPlayers = {}

    AsyncStorage.getItem("playerAll").then((value) => {


        if (!value) {
            allPlayers = initialState
            AsyncStorage.setItem('playerAll', JSON.stringify(initialState))

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
            AsyncStorage.setItem('playerAll',JSON.stringify(this.state))
        })

    }

    setFaction = (newFaction) => {
      const playerOne = {...this.state.playerOne}
      playerOne.faction = newFaction
        this.setState( {playerOne} );
    }

    setMap = (newMap) => {
      const playerOne = {...this.state.playerOne}
      playerOne.mapName = newMap
        this.setState( {playerOne} )
    }

    setDeploymentArea = (newDeploymentArea) => {
      const playerOne = {...this.state.playerOne}
      playerOne.deploymentArea = newDeploymentArea
        this.setState( {playerOne} )
    }

    addTerrainObject = (newTerrainObject) => {
      const playerOne = {...this.state.playerOne}
      playerOne.terrain = playerOne.terrain.concat(newTerrainObject);
        this.setState( {playerOne} )
    }

    addUnitPlacementObject = (newUnitPlacementObject) => {
      const playerOne = {...this.state.playerOne}
      playerOne.unitPlacement = playerOne.unitPlacement.concat(newUnitPlacementObject);
        this.setState( {playerOne} )
    }

    setUnit = (newUnit) => {
        const playerOne = {...this.state.playerOne}
        playerOne.units = playerOne.units.concat(newUnit);
          this.setState( {playerOne} );
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
                setDeploymentArea: this.setDeploymentArea,
                addUnitPlacementObject: this.addUnitPlacementObject
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}