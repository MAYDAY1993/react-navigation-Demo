/**
 * test textInput 
 */

import React, { Component } from 'React';
const ReactNative = require("react-native");

import uniqueBy from "unique-by";

// css
import Styles from "../style/Styles";

// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View
// } from 'react-native';

const { 
  StyleSheet,
  Text,
  TextInput,
  View
} = ReactNative;

const InputDemo = React.createClass({
  getInitialState(){
    return{
     text:"mayday" 
    }
  },

  _onChange(text){
  },

  render() {
    let arr = [
      {
        a:1,
        b:2
      },
      {
        a:1,
        b:3
      },
      {
        a:2,
        b:3
      },
      {
        a:2,
        b:4
      },
      {
        a:3,
        b:5
      },
      {
        a:5,
        b:1
      },
    ];

    let arr2 = uniqueBy(arr,'a');
    console.log(arr2);

    return (
      <View style={{flex:1}} >
        <View style={Styles.container}>
          <Text style={Styles.welcome}>
            hello world
          </Text>
        </View>
        <View style={{flex:1}} >
          <TextInput
            style={[{flex:1,borderStyle:"solid",borderWidth:20, borderColor:"blue"}]}
            autoFocus={true}
            onChangeText={this._onChange}
            placeholder="enter your name..." />  
        </View>
        <Text>one</Text>
      </View>
    );
  }
}) 


module.exports = InputDemo ;