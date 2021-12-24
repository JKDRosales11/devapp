import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button ,View } from 'react-native';


export default class Avatar extends Component{
 render(){
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
      Keitai
      <Text style={styles.innerText} > App</Text>
    </Text>
      <Text>Avatar page</Text>

      <Button
        title="Go to name"
        color="gray"
        onPress={() =>
              this.props.navigation.navigate('Name')
            }
      />

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


