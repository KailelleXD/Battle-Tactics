import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const MapSwitch = (image) => {
    switch (image) {
      case "map1":
      return require("../graphics/maps/alienmarsh.png")
      break;
  
      case "map2":
      return require("../graphics/maps/darklands.png")
      break;
  
      case "map3":
      return require("../graphics/maps/deadlands.png")
      break;
  
      case "map4":
      return require("../graphics/maps/drydesert.png")
      break;
  
      case "map5":
      return require("../graphics/maps/DustPlains.png")
      break;
  
      case "map6":
      return require("../graphics/maps/grassfield.png")
      break;
  
      case "map7":
      return require("../graphics/maps/io.png")
      break;
  
      case "map8":
      return require("../graphics/maps/mars.png")
      break;
  
      case "map9":
      return require("../graphics/maps/muddyriver.png")
      break;
  
      case "map10":
      return require("../graphics/maps/RockFormations.png")
      break;
  
      case "map11":
      return require("../graphics/maps/SandDunes.png")
      break;
  
      case "map12":
      return require("../graphics/maps/shallowsea.png")
      break;
  
      case "map13":
      return require("../graphics/maps/venus.png")
      break;
  
      case "map14":
      return require("../graphics/maps/wasteland.png")
      break;
  
      case "map15":
      return require("../graphics/maps/wetlands.png")
      break;
  
      default:
        return console.log("no map")
  
    } 
  }

const styles = StyleSheet.create({})

export default MapSwitch
