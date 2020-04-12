/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';

import UserDetails from '../screen/UserDetails/UserDetails';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <UserDetails />
    </View>
  );
};

export default App;
