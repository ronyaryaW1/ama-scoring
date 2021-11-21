/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import IdeaComponent from './IdeaComponent';
import styles from '../../scoring/style/Scoring.style';
import Idea1Container from '../Container/Idea1Container';
import Idea2Container from '../Container/Idea2Container';
import data from '../../scoring/json/data.json';

const Tab = createMaterialTopTabNavigator();

const CompareScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/icon/back.png')}
              style={styles.imageBack}
            />
          </TouchableOpacity>
          <Text style={styles.name}>Compare</Text>
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="Idea"
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#085D7A',
          tabBarLabelStyle: {fontSize: 15, fontWeight: '500'},
          tabBarStyle: {backgroundColor: 'white'},
          tabBarIndicatorStyle: {
            backgroundColor: '#085D7A',
          },
        }}>
        <Tab.Screen name="Idea 1" component={Idea1Container} />
        <Tab.Screen name="Idea 2" component={Idea2Container} />
      </Tab.Navigator>
      <View
        style={{
          width: '100%',
          height: 64,
          backgroundColor: '#EBEBEB',
          //   paddingHorizontal: 16,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '50%',
            height: '100%',
            borderWidth: 0.3,
            justifyContent: 'center',
          }}>
          <Text style={{paddingHorizontal: 16, marginTop: 0}}>Idea 1</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{paddingHorizontal: 16, fontWeight: 'bold', fontSize: 20}}>
              {data[0]?.result}
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#E15C30', paddingLeft: 16, paddingTop: 8}}>
                klik & edit score
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            height: '100%',
            borderWidth: 0.3,
            justifyContent: 'center',
          }}>
          <Text style={{paddingHorizontal: 16, marginTop: 0}}>Idea 2</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{paddingHorizontal: 16, fontWeight: 'bold', fontSize: 20}}>
              {data[1]?.result}
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#E15C30', paddingLeft: 16, paddingTop: 8}}>
                klik & edit score
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CompareScreen;
