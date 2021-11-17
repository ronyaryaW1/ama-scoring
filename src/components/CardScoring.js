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
    borderRadius: 10,
    height: '15%',
    padding: 10,
    flex: 1,
  },
  textDec: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#231F20',
    paddingTop: 8,
  },
  boxFilter: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#085D7A',
    // width: '20%',
    // height: 30,
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
    marginVertical: 5,
    fontSize: 14,
    color: 'white',
  },
});
