import React, { Component } from 'react';
import { StyleSheet, Text, Button ,View } from 'react-native';

export default class Nav extends Component{
    render(){
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
      Keitai
      <Text style={styles.innerText} > App</Text>
    </Text>
      <Text>Nav tab</Text>
    </View>

    
  );
}
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd23f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});


