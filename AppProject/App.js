/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './application/common/LoginScreen';
import HomeScreen from './application/common/HomeScreen';
import SignUpScreen from './application/common/SignUpScreen';

import SInfo from 'react-native-sensitive-info';

class SplashScreen extends Component {

  componentDidMount() {
    SInfo.setItem('userUniqueKey', 'ABCDEF', {});
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      SInfo.getItem('userUniqueKey', {}).then(value => {
        if (value) {
          navigate('SignUpScreen', { name: 'Jane' });
        }else{
          navigate('LoginScreen', { name: 'Jane' });
        }
      })
    }, 3000);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require('./application/resources/images/applogo.png')} />
      </View>
    );
  }
};




const RootStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    LoginScreen: LoginScreen,
    HomeScreen: HomeScreen,
    SignUpScreen: SignUpScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    defaultNavigationOptions: {
      header: null
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
