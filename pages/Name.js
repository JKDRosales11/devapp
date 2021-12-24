import React, { Component } from 'react';
import { StyleSheet, Text, Button ,View } from 'react-native';

export default class Name extends Component{
    render(){
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
      Keitai
      <Text style={styles.innerText} > App</Text>
    </Text>
      <Text>Name</Text>
      <Button
        title="NAv tab"
        color="gray"
        onPress={() =>
              this.props.navigation.navigate('Nav')
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



