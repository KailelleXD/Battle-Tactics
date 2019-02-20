import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const MapSwitch = (image) => {
    switch (image) {
      case "map1":
      return require("../graphics/maps/City.jpg")
      // return require("../graphics/maps/SandDunes.png")
      break;
  
      case "map2":
      return require("../graphics/maps/Forest.jpg")
      break;
  
      case "map3":
      return require("../graphics/maps/Grassland.jpg")
      break;
  
      case "map4":
      return require("../graphics/maps/Snowfall.jpg")
      break;
  
      case "map5":
      return require("../graphics/maps/Swamp.jpg")
      break;
  
      case "map6":
      return require("../graphics/maps/Valley.jpg")
      break;
  
      default:
        return console.log("no map")
  
    } 
  }

const styles = StyleSheet.create({})

export default MapSwitch
