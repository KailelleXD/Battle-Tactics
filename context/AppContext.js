import React from 'react';

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    setName = (newName) => {
        this.setState({playerOne: {name: newName}});
    }

    setMap = (newMap) => {
        this.setState({playerOne: {mapName: newMap}})
    }

    addTerrainObject = (newTerrainObject) => {
        var joined = this.state.playerOne.terrain.concat(newTerrainObject);
        this.setState({ playerOne: {terrain: joined}})
    }

    render () {
        return (
            <AppContext.Provider value={{
                state: this.state,
                setName: this.setName,
                setMap: this.setMap,
                addTerrainObject: this.addTerrainObject
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}