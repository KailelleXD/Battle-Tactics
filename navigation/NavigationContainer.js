import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ChooseMapScreen from '../screens/ChooseMapScreen';
import LoadScreen from '../screens/LoadScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChooseTerrainScreen from '../screens/ChooseTerrainScreen';
import PlayerOneScreen from '../screens/PlayerOneScreen';
import PlayerTwoScreen from '../screens/PlayerTwoScreen';

const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    Create: ChooseMapScreen,
    Load: LoadScreen,
    Settings: SettingsScreen,
    Terrain: ChooseTerrainScreen,
    PlayerOne: PlayerOneScreen,
    PlayerTwo: PlayerTwoScreen
  });
  
const NavigationContainer = createAppContainer(StackNavigator);

export default NavigationContainer;