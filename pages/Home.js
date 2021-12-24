
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button ,View } from 'react-native';


export default class Home extends Component{
render(){
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
      Keitai
      <Text style={styles.innerText} > Home</Text>
    </Text>
      <Text>App Just For You!</Text>

      <Button
        title="Sign in"
        color="gray"
        onPress={() =>
              this.props.navigation.navigate('SignIn')
            }
      />
      

      <StatusBar style="auto" />
    </View>

    
  );
}
}
const styles = StyleSheet.create({
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
// function Chatroom() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffd23f' }}>
//     </View>

//   );
// }

// function Diary() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffd23f' }}>
//       <Text>Diary</Text>
//     </View>
//   );
// }
// function Calendar() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffd23f'}}>
//       <Text>Calendar</Text>
//     </View>
//   );
// }

// function Settings() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffd23f' }}>
//       <Text>Settings</Text>
//     </View>
//   );
// }
// const Tab = createBottomTabNavigator();

// function Home1() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator   screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Chatroom') {
//               iconName = focused
//                 ? 'ios-chatbubbles'
//                 : 'ios-chatbubbles-outline';
//             } else if (route.name === 'Diary') {
//               iconName = focused 
//               ? 'ios-list' 
//               : 'ios-list-outline';
//             } else if (route.name === 'Calendar') {
//               iconName = focused 
//               ? 'ios-calendar' 
//               : 'ios-calendar-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused 
//               ? 'ios-settings' 
//               : 'ios-settings-outline';
//             }
           

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#603808',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Chatroom" component={Chatroom}/>
//         <Tab.Screen name="Diary" component={Diary} />
//         <Tab.Screen name="Calendar" component={Calendar} />
//         <Tab.Screen name="Settings" component={Settings} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }