import React from 'react';
import { AsyncStorage } from 'react-native';
import { } from '../utils/asyncStorage'

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

    //ignore

    const defaultPlayerAll = {
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

    let allPlayers = {}


    AsyncStorage.getItem("playerAll").then((value) => {


        if (!value) {
            allPlayers = defaultPlayerAll
            AsyncStorage.setItem('playerAll', JSON.stringify(defaultPlayerAll))

        } else {
            allPlayers = JSON.parse(value)

        }

        this.setState(allPlayers)
    })

    //ignore

    }


            
    

    setName = (newName) => {
      const playerOne = {...this.state.playerOne}
      playerOne.name = newName
        this.setState( {playerOne}, () => {
            AsyncStorage.setItem('playerAll',JSON.stringify(this.state))
        } )

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

    addTerrainObject = (newTerrainObject) => {
      const playerOne = {...this.state.playerOne}
      playerOne.terrain = playerOne.terrain.concat(newTerrainObject);
        this.setState( {playerOne} )
    }

    render () {
        return (
            <AppContext.Provider value={{
                state: this.state,
                setName: this.setName,
                setMap: this.setMap,
                addTerrainObject: this.addTerrainObject,
                setFaction: this.setFaction
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}