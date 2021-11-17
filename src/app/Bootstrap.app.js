/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './../config/Routes.cfg';
import links from '../components/Links';

const Bootstrap = () => {
  return (
    <NavigationContainer linking={links}>
      <Routes />
    </NavigationContainer>
  );
};
export default Bootstrap;
