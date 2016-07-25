/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class Header extends Component {
  render(){
    return(
      <View>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text>个人</Text>
          <Text>简历</Text>
        </Text>
      </View>
      </View>
      );
  }
}

class Info extends Component {
  render(){
    return(
      <View>
      <View style={{marginTop:20,flex: 1, flexDirection: 'row'}}>
      <Image
        source={require('./logo.png')}
        style={{width: 80, height: 80, marginLeft: 80, marginRight: 20}} />
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
       <Text style={{fontSize:20,}}>###</Text>
       <Text>###</Text>
       <Text>####</Text>
       </View>
      </View>
      <View><Text style={{fontSize:20,textAlign:'center',marginTop:20,}}>掌握技能</Text></View>
      </View>
      );
  }
}

class Skills extends Component {
  render(){
    return(
      <View tyle={{height:50,}}>
      <View style={{marginTop:20,flex: 1, flexDirection: 'row'}}>
      <Image
                source={require('./logo.png')}
                style={{width: 60, height: 40, marginLeft: 60, marginRight: 20}} />
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
       <Text style={{fontSize:20,}}>姓名</Text>
       <Text>职业</Text>
       </View>
      </View>
      </View>
      );
  }
}

class AwesomeProject extends Component {
  render() {
    return (
    <View>
     <Header/>
     <Info/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  info:{
   
  },
  header:{
    height:50,
    backgroundColor:'#ff7777',
  },
  title:{
    fontSize:25,
    textAlign:'center',
    marginTop:10,
    color:'#ffff',
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