/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { appstyle } from '../managers/StyleManager'

//import CodeInput from 'react-native-confirmation-code-input';
import PhoneInput from 'react-native-phone-input'
export default class SignUpScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  
  }

  
  selectCountry(country) {
    alert("hello")
    this.phone.selectCountry(country.iso2);
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{ flex: 1, marginTop: 90, alignItems: "center" }}>
        <Image source={require('../resources/images/applogo.png')} />

        <Text style={appstyle.titleText}>{"\n"}Setup Your Account{"\n"}</Text>
        <Text style={appstyle.subTitleText}>{"\n"}Enter Your Mobile Number{"\n"}</Text>
        <PhoneInput
                onChange={(country)=>{ this.selectCountry(country) }}
        
            />
      </View>
    );
  }
  checkPasscode(isValid, passCode) {
    alert(passCode);
  }
};

