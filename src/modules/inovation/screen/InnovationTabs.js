import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IdeasInfo from './IdeasInfo.screen';
import ScoringForm from './ScoringForm.screen';

const Tab = createMaterialTopTabNavigator();

const InnovationTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#085D7A',
        tabBarLabelStyle: { fontSize: 15, fontWeight: '500' },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle: {
          backgroundColor: '#085D7A',
        },
      }}>
      <Tab.Screen name="Ideas Info" component={IdeasInfo} />
      <Tab.Screen name="Scoring Form" component={ScoringForm} />
    </Tab.Navigator>
  );
};

export default InnovationTabs;

const styles = StyleSheet.create({});
