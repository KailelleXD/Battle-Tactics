import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const MapSwitch = (image) => {
    switch (image) {
      case "map1":
      return require("../graphics/maps/alienmarsh.jpg")
      break;
  
      case "map2":
      return require("../graphics/maps/darklands.jpg")
      break;
  
      case "map3":
      return require("../graphics/maps/deadlands.jpg")
      break;
  
      case "map4":
      return require("../graphics/maps/drydesert.jpg")
      break;
  
      case "map5":
      return require("../graphics/maps/DustPlains.jpg")
      break;
  
      case "map6":
      return require("../graphics/maps/grassfield.jpg")
      break;
  
      case "map7":
      return require("../graphics/maps/io.jpg")
      break;
  
      case "map8":
      return require("../graphics/maps/mars.jpg")
      break;
  
      case "map9":
      return require("../graphics/maps/muddyriver.jpg")
      break;
  
      case "map10":
      return require("../graphics/maps/RockFormations.jpg")
      break;
  
      case "map11":
      return require("../graphics/maps/SandDunes.jpg")
      break;
  
      case "map12":
      return require("../graphics/maps/shallowsea.jpg")
      break;
  
      case "map13":
      return require("../graphics/maps/venus.jpg")
      break;
  
      case "map14":
      return require("../graphics/maps/wasteland.jpg")
      break;
  
      case "map15":
      return require("../graphics/maps/wetlands.jpg")
      break;
  
      default:
        return console.log("no map")
  
    } 
  }

const styles = StyleSheet.create({})

export default MapSwitch
