/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import question from '../json/question.json';

const IdeaComponent = ({data, result}) => {
  let backgroundColor;
  switch (data.status) {
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
    <View style={{flex: 1, backgroundColor: '#FFFF'}}>
      <View style={{paddingTop: 16, paddingHorizontal: 16}}>
        <Text style={{color: '#231F20', fontWeight: '700'}}>{data?.title}</Text>
        <Text style={{marginTop: 8, color: '#231F20'}}>by {data.desc}</Text>
        <View style={{flexDirection: 'row', marginTop: 12}}>
          <View
            style={{
              backgroundColor: '#085D7A',
              borderRadius: 20,
              marginRight: 8,
            }}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                color: 'white',
              }}>
              {data.theme}
            </Text>
          </View>
          <View style={{backgroundColor: backgroundColor, borderRadius: 20}}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                color: 'white',
              }}>
              {data.status}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.5,
            backgroundColor: 'grey',
            marginTop: 12,
            marginBottom: 12,
          }}
        />
        {/* description */}
        <View>
          <Text style={{color: '#085D7A', fontWeight: '700', fontSize: 14}}>
            Description
          </Text>
          <Text style={{fontSize: 14, paddingTop: 8}}>{data.description}</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.5,
            backgroundColor: 'grey',
            marginTop: 12,
            marginBottom: 12,
          }}
        />
        {/* scoring */}
        <Text style={{color: '#085D7A', fontWeight: '700', fontSize: 14}}>
          Scoring Result
        </Text>
        {question.map(x => (
          <View
            key={x.no.toString()}
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{}}>{x.no}.</Text>
            <View style={{width: 300, paddingRight: 16, paddingLeft: 4}}>
              <Text style={{textAlign: 'left'}}>{x.question}</Text>
            </View>
            <View
              style={{
                backgroundColor: '#085D7A',
                borderRadius: 4,
                height: 22,
                width: 28,
                alignItems: 'center',
                alignSelf: 'center',
                marginLeft: 30,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                90
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default IdeaComponent;
