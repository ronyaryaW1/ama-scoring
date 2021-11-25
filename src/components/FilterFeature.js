/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const FilterFeature = ({icon, filter, onPress}) => {
  // console.log('msmamsa', icon);
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.box,
          {flexDirection: icon !== undefined ? 'row' : 'column'},
        ]}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{filter}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FilterFeatureText = props => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{props.filter}</Text>
    </View>
  );
};
export {FilterFeature, FilterFeatureText};

const styles = StyleSheet.create({
  box: {
    margin: 10,
    backgroundColor: '#FFFFFF',
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
  },
  icon: {
    width: 20,
  },
});
