/* eslint-disable react/jsx-no-undef */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login/screen/Login.screen';
import SplashScreen from '../modules/splash/screen/Splash.screen';
import Main from '../modules/main/screen/Main.screen';
import Home from '../modules/home/screen/Home.screen';
import Scoring from '../modules/scoring/screen/Scoring.screen';
import innovationTabs from '../modules/inovation/screen/InnovationTabs';
import Compare from '../modules/compare/screen/Compare.screen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Scoring"
        component={Scoring}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Compare"
        component={Compare}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InnovationTabs"
        component={innovationTabs}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontSize: 19,
            fontWeight: '700',
            textTransform: 'capitalize',
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default Routes;
