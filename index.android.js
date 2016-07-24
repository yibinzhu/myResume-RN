/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  View
} from 'react-native';


class  Header extends Component{
  render(){
    return(
        <View style={styles.flex}>
          <Text style={styles.font}>
            <Text style={styles.font_1}>个人</Text>
            <Text style={styles.font_2}>简介</Text>
          </Text>
        </View>
      );
  }
  }

// class Info extends Component{
//   render(){
//     return(
//       <View>
//         <Text style={}></Text>
//       </View>
//       );
//   }
// }

class AwesomeProject extends Component {
  render() {
    return (
      <Header/>
    );
  }
}

const styles = StyleSheet.create({

  flex:{
    margin:25,
    height:50,
    borderBottomWidth:3/PixelRatio.get(),
    borderBottomColor:'#EF2D36',
    alignItems:'center',

  },
  font:{
    fontSize:25,
    textAlign:'center'
  },
  font_1:{
    color:'#CD1D1C',

  },
  font_2:{
    color:'#FFF',
    backgroundColor:'#ff6c6c',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

