import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const MapSwitch = (image) => {
    switch (image) {
      case "Alien Marsh":
      return require("../graphics/maps/alienmarsh.jpg")
      break;
  
      case "Dark Lands":
      return require("../graphics/maps/darklands.jpg")
      break;
  
      case "Dead Lands":
      return require("../graphics/maps/deadlands.jpg")
      break;
  
      case "Dry Desert":
      return require("../graphics/maps/drydesert.jpg")
      break;
  
      case "Dust Plains":
      return require("../graphics/maps/DustPlains.jpg")
      break;
  
      case "Grassfield":
      return require("../graphics/maps/grassfield.jpg")
      break;
  
      case "Io":
      return require("../graphics/maps/io.jpg")
      break;
  
      case "Mars":
      return require("../graphics/maps/mars.jpg")
      break;
  
      case "Muddy River":
      return require("../graphics/maps/muddyriver.jpg")
      break;
  
      case "Rock Formations":
      return require("../graphics/maps/RockFormations.jpg")
      break;
  
      case "Sand Dunes":
      return require("../graphics/maps/SandDunes.jpg")
      break;
  
      case "Shallow Sea":
      return require("../graphics/maps/shallowsea.jpg")
      break;
  
      case "Venus":
      return require("../graphics/maps/venus.jpg")
      break;
  
      case "Wasteland":
      return require("../graphics/maps/wasteland.jpg")
      break;
  
      case "Wetlands":
      return require("../graphics/maps/wetlands.jpg")
      break;
  
      default:
        return console.log("no map")
  
    } 
  }

const styles = StyleSheet.create({})

export default MapSwitch
