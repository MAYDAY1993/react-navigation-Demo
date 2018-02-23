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
        <Button
          title="to detail"
          onPress={() => this.props.navigation.navigate('Detail',{
            itemId: 555,
            otherParam:'hello mayday'
          })} 
        />
      </View>
    );
  }
})

const DetailScreen = React.createClass({
  render(){
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
  
    return(
      <View style={{flex:1,alignItems: 'center', justifyContent:'center'}}>
        <Text>detail</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam:{JSON.stringify(otherParam)}</Text>
        <Button
          title="to detail again"
          onPress={() => this.props.navigation.navigate('Detail')} 
        />
        <Button
          title="back"
          onPress={() => this.props.navigation.goBack()} />
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
