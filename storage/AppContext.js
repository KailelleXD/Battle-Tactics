import React from 'react';
import { AsyncStorage } from 'react-native';
import models from "../utils/data/models.json";
import factions from "../utils/data/factions.json";

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
            units: models,
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
            test: "**** TESTER ****",
            randomStart: false
        },
        BSData: {
            gotData: false,
            factions: factions,
            data: []
        },
        posData: {
            scaleData: 1,
            lastScale: 1,
        }


    }

    

    let allPlayers = {}

    AsyncStorage.getItem("Game6").then((value) => {


      if (!value) {
        allPlayers = initialState
        AsyncStorage.setItem('Game6', JSON.stringify(initialState))

      } else {
        allPlayers = JSON.parse(value)

      }

      this.setState(allPlayers)
    })

  }

  setName = (newName) => {
    const playerOne = { ...this.state.playerOne }
    playerOne.name = newName
    this.setState({ playerOne }, () => {
      AsyncStorage.setItem('Game6', JSON.stringify(this.state))
    })

  }

  setFaction = (newFaction) => {
    const playerOne = { ...this.state.playerOne }
    playerOne.faction = newFaction
    this.setState({ playerOne });
  }

  setMap = (newMap) => {
    const playerOne = { ...this.state.playerOne }
    playerOne.mapName = newMap
    this.setState({ playerOne })
  }

  setDeploymentArea = (newDeploymentArea) => {
    const playerOne = { ...this.state.playerOne }
    playerOne.deploymentArea = newDeploymentArea
    this.setState({ playerOne })
  }

  addTerrainObject = (newTerrainObject) => {
    const playerOne = { ...this.state.playerOne }
    playerOne.terrain = playerOne.terrain.concat(newTerrainObject);
    this.setState({ playerOne })
  }

  addUnitPlacementObject = (newUnitPlacementObject) => {
    const playerOne = { ...this.state.playerOne }
    playerOne.unitPlacement = playerOne.unitPlacement.concat(newUnitPlacementObject);
    // playerone.units = playerOne.units.slice( { id: newUnitPlacementObject.id } );
    this.setState({ playerOne })
  }

  setUnit = (newUnit) => {
    const playerOne = { ...this.state.playerOne }
    playerOne.units = playerOne.units.concat(newUnit);
    this.setState({ playerOne });
  }

  updateUnits = (newUnits) => {
    const playerOne = { ...this.state.playerOne };
    playerOne.units = newUnits;
    this.setState({ playerOne });
  }

  getAllData = async () => {
    console.log("FETCHING DATA!")
    const parseString = require('react-native-xml2js').parseString;
    const BSData = { ...this.state.BSData };
    let unitID = 1;

    
    for (let j = 0; j < 3; j++) {
      let factionName = this.state.BSData.factions[j].name
      let factionID = this.state.BSData.factions[j].id
      let URLname = this.state.BSData.factions[j].name.replace(/\s/g, '%20')
      // let urlifiedName = name.replace(/\s/g, '%20')
      await fetch('https://raw.githubusercontent.com/BSData/wh40k/master/' + URLname + '.cat')
      .then(response => response.text())
      .then((response) => {
        parseString(response, function (err, result) {
            let categoryArr = [factionID, factionName];
            codexObj = result.catalogue;
            catalogue = codexObj[Object.keys(codexObj)[0]];
            categories = codexObj.categoryEntries[0].categoryEntry;
            console.log("END PARSSTRING: " + factionName)
            for (let i = 0; i < categories.length; i++) {
              let categoryName = categories[i][Object.keys(categories[i])[0]].name;
              const unitData = {
                id: unitID,
                catName: categoryName
              }
              categoryArr.push(unitData);
              unitID++
            }
            const newFaction = {
              id: factionID,
              name: factionName,
              categoryArr
            }
            BSData.data = BSData.data.concat(newFaction);
            // categoryArr = [];
          })
          // console.log(BSData.data)
        })
        .catch((err) => {
          console.log('fetch', err)
        })
    }

    this.setState({
      BSData
    })

    console.log(this.state.BSData.data)
    return categoryArr;

  }



  render() {
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
        addUnitPlacementObject: this.addUnitPlacementObject,
        getAllData: this.getAllData
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}



    setScale = (newScale) => {
        posData = {...this.state.posData}
        // console.log("posData: " + posData);
        posData.lastScale = posData.scaleData;
        posData.scaleData = newScale;
        // if (typeof posData.scaleData !== undefined || posData.lastScale !== undefined) {
            console.log("posData.scaleData: " + posData.scaleData)
            console.log("posData.lastScale: " + posData.lastScale)
            this.setState({ posData });
            // console.log(this.state.posData.scaleData);
        // }
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
                addUnitPlacementObject: this.addUnitPlacementObject,
                setScale: this.setScale,
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
