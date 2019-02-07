import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ChooseMapScreen from '../screens/ChooseMapScreen';
import LoadScreen from '../screens/LoadScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChooseTerrainScreen from '../screens/ChooseTerrainScreen';
import PlayerOneScreen from '../screens/PlayerOneScreen';
import PlayerTwoScreen from '../screens/PlayerTwoScreen';
import BattleScribeScreen from '../screens/BattleScribeScreen';
import ChooseFactionScreen from '../screens/ChooseFactionScreen';
import FactionDetailScreen from '../screens/FactionDetailScreen';
import DeploymentScreen from '../screens/DeploymentScreen';

const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    Create: ChooseMapScreen,
    Load: LoadScreen,
    Settings: SettingsScreen,
    Terrain: ChooseTerrainScreen,
    PlayerOne: PlayerOneScreen,
    PlayerTwo: PlayerTwoScreen,
    BattleScribe: BattleScribeScreen,
    Factions: ChooseFactionScreen,
    FactionDetail: FactionDetailScreen,
    Deployment: DeploymentScreen
  });
  
const NavigationContainer = createAppContainer(StackNavigator);

export default NavigationContainer;