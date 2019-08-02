/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      </View>
    );
  }
};

