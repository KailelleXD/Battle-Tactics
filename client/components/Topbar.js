import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default function Topbar() {
  return (
 <View style={{ flex: 1, backgroundColor: "#ddd" }}>
    <Header 

    // leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent = {{ text: "Battle Tactics", style: { color: "#fff" } }}
    // rightComponent={{ icon: 'home', color: '#fff' }}
    
    />
 </View>
  )
}
