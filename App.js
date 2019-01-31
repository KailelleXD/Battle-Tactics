import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// navigation
// import { createStackNavigator, createAppNavigator, createAppContainer } from 'react-navigation';
import NavigationContainer from './navigation/NavigationContainer';
// screens
// import HomeScreen from './screens/HomeScreen';
// import ChooseMapScreen from './screens/ChooseMapScreen';
// import LoadScreen from './screens/LoadScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import ChooseTerrainScreen from './screens/ChooseTerrainScreen';
// import PlayerOneScreen from './screens/PlayerOneScreen';
// import PlayerTwoScreen from './screens/PlayerTwoScreen';
// context
import { AppProvider } from './context/AppContext';

// const AppStackNavigator = createStackNavigator({
//   Home: HomeScreen,
//   Create: ChooseMapScreen,
//   Load: LoadScreen,
//   Settings: SettingsScreen,
//   Terrain: ChooseTerrainScreen,
//   PlayerOne: PlayerOneScreen,
//   PlayerTwo: PlayerTwoScreen
// });

// const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {

  render() {
    return (
      <AppProvider>
        <NavigationContainer />
      </AppProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
