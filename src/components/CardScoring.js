import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardScoring = props => {
  return (
    <View style={styles.box}>
      <Text style={styles.content}>{props.content}</Text>
      <Text style={styles.textDec}>{props.title}</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.boxFilter}>
          <Text
            style={[styles.title, {paddingVertical: 5, paddingHorizontal: 10}]}>
            {props.filter}
          </Text>
        </View>
        <View style={styles.boxFilter}>
          <Text
            style={[styles.title, {paddingVertical: 5, paddingHorizontal: 10}]}>
            {props.category}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardScoring;

const styles = StyleSheet.create({
  box: {
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#085D7A',
    height: '15%',
    padding: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textDec: {
    fontSize: 14,
    color: '#231F20',
    paddingTop: 1,
    paddingBottom: 12,
  },
  boxFilter: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#085D7A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },
  content: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    // marginVertical: 5,
    fontSize: 14,
    color: 'white',
  },
});
