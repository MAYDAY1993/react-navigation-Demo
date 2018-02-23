/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';


// UI components
// import  InputDemo from './component/textinput';
import App from './component/App';

const myApp = React.createClass({
  render() {
    return (
      <View style={{flex:1}} >
        <Text>hello rn</Text>
      </View>
    );
  }
}) 

AppRegistry.registerComponent('myApp', () => App);

// module.exports = myApp;

// class HomeScreen extends React.Component{
//   render() {
//     return (
//       <View style={{flex:1}} >
//         <InputDemo />
//         <Text>home screen</Text>
//       </View>
//     );
//   }
// }

// class DetailScreen extends React.Component{
//   render(){
//     return(
//       <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const RootStack = StackNavigator(
//   {
//     Home: {
//       screen: HomeScreen
//     },
//     Details: {
//       screen: DetailScreen
//     }
//   },
//   {
//     initialRouteName: 'Home'
//   }
// );

// export default class App extends React.Component{
//   render(){
//     return <RootStack />;
//   }
// }

// module.exports = App;

// AppRegistry.registerComponent('myApp', () => RootNavigator);

