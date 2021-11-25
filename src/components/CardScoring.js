/* eslint-disable react-native/no-inline-styles */
// import {Checkbox, CheckIcon} from 'native-base';

import {Checkbox} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardScoring = ({data, route}) => {
  const dataArray = require('../modules/scoring/json/data.json');
  const [dataFilter, setFilter] = useState(dataArray);

  const handleChange = id => {
    console.log('idddddddddd', id);
    let temp = dataFilter?.map(product => {
      console.log('datafilter', product);
      if (id === product.id) {
        console.log('productId');
        return {...product, isChecked: !product.isChecked};
      }
      return product;
    });
    const tempIsChecked = temp.filter(x => x.isChecked);
    console.log('themea', temp);
    console.log('tempIsChecked', tempIsChecked);
    setFilter(temp);
  };

  let backgroundColor;
  switch (data?.status) {
    case 'Draft':
      backgroundColor = '#F9CC2C';
      break;
    case 'Submitted':
      backgroundColor = '#9ADFB1';
      break;
    default:
      backgroundColor = '#9ADFB1';
      break;
  }

  return (
    <View
      style={[
        styles.box,
        {
          flexDirection: 'row',
          paddingVertical: route === 'compare' ? 8 : 10,
          paddingHorizontal: route === 'compare' ? 0 : 16,
        },
      ]}>
      {route === 'compare' && (
        <View style={{paddingVertical: 43, paddingHorizontal: 8}}>
          <Checkbox
            value={data.title}
            accessibilityLabel="menu-filter"
            // onPress={() => setSelectedId(item.title)}
            onChange={() => {
              handleChange(data.id);
            }}
          />
        </View>
      )}
      <View style={{width: 272}}>
        <Text style={styles.content}>{data.title}</Text>
        <Text style={styles.textDec}>{data.desc}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
          {route === 'compare' && (
            <View style={{backgroundColor: backgroundColor, borderRadius: 20}}>
              <Text
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  color: 'white',
                }}>
                {data.status}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CardScoring;

const styles = StyleSheet.create({
  box: {
    margin: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    // borderWidth: 0.1,
    paddingHorizontal: 16,
    borderColor: '#085D7A',
    height: '15%',
    // width: '98%',
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
