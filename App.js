import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// navigation
import NavigationContainer from './navigation/NavigationContainer';

// context
import { AppProvider } from './context/AppContext';

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
