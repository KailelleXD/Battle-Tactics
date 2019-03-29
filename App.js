import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Tab, Button, Icon, Text } from 'native-base';
// navigation
import NavigationContainer from './navigation/NavigationContainer';

// context
import { AppProvider } from './storage/AppContext';
import { PhysProvider } from './storage/physContext';

export default class App extends React.Component {

  render() {
    return (
      <PhysProvider>
        <AppProvider>
          <NavigationContainer />
        </AppProvider>
      </PhysProvider>
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
