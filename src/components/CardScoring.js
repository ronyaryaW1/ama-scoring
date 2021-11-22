/* eslint-disable react-native/no-inline-styles */
// import {Checkbox, CheckIcon} from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardScoring = ({data, route}) => {
  const [value, setValue] = React.useState([]);
  const [cek, setCek] = useState(false);
  console.log('toggleCheckBox', value.isChecked, value.desc);
  console.log('value', value);

  const onChangeVelue = (itemSelected, index) => {
    setCek(!cek);
    const _data = [data];
    const dataSelect = _data.find(x => x.desc === itemSelected);
    if (dataSelect) {
      dataSelect.isChecked = true;
    }
    const newData = _data.filter(x => x.isChecked);
    setValue(newData);
  };

  return (
    <View style={[styles.box, {flexDirection: 'row'}]}>
      {route === 'compare' && (
        <View style={{paddingVertical: 43}}>
          <CheckBox
            // value={[data].filter(x => x.isChecked)}
            disabled={false}
            boxType="square"
            offAnimationType="fade"
            onAnimationType="fill"
            onChange={() => onChangeVelue(data.desc, data.id)}
          />
        </View>
      )}
      <View style={{width: 272}}>
        <Text style={styles.content}>{data.title}</Text>
        <Text style={styles.textDec}>{data.desc}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.boxFilter}>
            <Text
              style={[
                styles.title,
                {paddingVertical: 5, paddingHorizontal: 10},
              ]}>
              {data.theme}
            </Text>
          </View>
          <View style={styles.boxFilter}>
            <Text
              style={[
                styles.title,
                {paddingVertical: 5, paddingHorizontal: 10},
              ]}>
              {data.category}
            </Text>
          </View>
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
    // borderWidth: 0.1,
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
  checbox: {
    width: 14,
    height: 14,
    marginTop: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    // zIndex: 10,
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
