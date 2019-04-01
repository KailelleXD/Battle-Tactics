import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
// screens
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
import ChooseUnitScreen from '../screens/ChooseUnitScreen';
import ChooseDeploymentScreen from '../screens/ChooseDeploymentScreen';
import PlaceUnitsScreen from '../screens/PlaceUnitsScreen';
import GameReviewScreen from '../screens/GameReviewScreen';
import GameScreen from '../screens/GameScreen';
import GameStartScreen from '../screens/GameStartScreen';
import TerrainPlacement from '../components/TerrainComponents/TerrainPlacement';
import DeveloperScreen from '../screens/DeveloperScreen';
import MenuButton from '../components/MenuButton';
import MovementPhaseScreen from '../screens/phases/MovementPhaseScreen';
import PsychicPhaseScreen from '../screens/phases/PsychicPhaseScreen';
import ShootingPhaseScreen from '../screens/phases/ShootingPhaseScreen';
import ChargePhaseScreen from '../screens/phases/ChargePhaseScreen';
import FightPhaseScreen from '../screens/phases/FightPhaseScreen';
import MoralePhaseScreen from '../screens/phases/MoralePhaseScreen';
import StartScreen from '../screens/phases/StartScreen';

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
    Units: ChooseUnitScreen,
    DeploymentArea: ChooseDeploymentScreen,
    PlaceUnits: PlaceUnitsScreen,
    GameReview: GameReviewScreen,
    GameScreen: GameScreen,
    GameStart: GameStartScreen,
    TerrainPlacement: TerrainPlacement,
    Developer: DeveloperScreen,
    Movement: MovementPhaseScreen,
    Psychic: PsychicPhaseScreen,
    Shooting: ShootingPhaseScreen,
    Charge: ChargePhaseScreen,
    Fight: FightPhaseScreen,
    Morale: MoralePhaseScreen,
    Start: StartScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#333333",
        borderBottomWidth: 2,
        borderBottomColor: "#111111"
      },
      headerTitleStyle: {
        color: "#e5b83b",
      },
      headerLeft: null,
    },
    headerLayoutPreset: "center",
  }
  );

  const BottomTabNavigator = createBottomTabNavigator({
    Home: {
      screen: StackNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="home"
            style={{color: tintColor}}
          />
        )
      })
    },
    Menu: {
      screen: () => null,
      navigationOptions: () => ({
        tabBarIcon: <MenuButton />
      })
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="cog"
            style={{color: tintColor}}
          />
        )
      })
    },
  },{
    initialRouteName: "Home",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#e5b83b",
      // inactiveTintColor: "red",
      style: {
        backgroundColor: "#333333",
        borderTopWidth: 2,
        borderTopColor: "#e5b83b"
      },
    },
  });
  
const NavigationContainer = createAppContainer(BottomTabNavigator);

export default NavigationContainer;