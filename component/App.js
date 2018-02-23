/**
 * react-navigation demo root page
 * 
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

const HomeScreen = React.createClass({
  render(){
    return(
      <View style={{flex:1,alignItems: 'center', justifyContent:'center'}} >
        <Text>Home</Text>
      </View>
    );
  }
})

const DetailScreen = React.createClass({
  render(){
    return(
      <View style={{flex:1,alignItems: 'center', justifyContent:'center'}}>
        <Text>detail</Text>
      </View>
    );
  }
})

const RootStack = StackNavigator(
  {
    Home:{
      screen: HomeScreen
    },
    Detail:{
      screen: DetailScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component{
  render(){
    return <RootStack />;
  }
}

// import DetailOne from './DetailOneScreen';
// import DetailTwo from './DetailTwoScreen';

// class HomePage extends React.component{
//   static navigationOptions={
//     title:'home',
//     header:{
//       backTitle:''
//     }
//   }

//   constructor(props){
//     super(props);
//   }

//   render(){
//     const {navigate} = this.props.navigation;
//     return (
      
//     )
//   }
// }

// class HomeScreen extends React.Component{
//   render(){
//     return(
//       <View>
//         <View>
//           <Text>home screen</Text>          
//         </View>
//       </View>
//     );
//   }
// }

// class DetailScreen extends React.Component{
//   render(){
//     return(
//       <View>
//         <View>
//           <Text>detail screen</Text>          
//         </View>
//       </View>
//     );
//   }
// }

// export default class App extends React.Component{
//   render(){
//     return <RootNavigator />;
//   }
// }
