import {AsyncStorage} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../modules/home/style/Home.style';
const FilterItem = ({data, customAction}) => {
  const [selectedId, setSelectedId] = React.useState(null);

  const Item = ({
    item,
    onPress,
    backgroundColor,
    textColor,
    disabled = false,
    titles,
  }) => (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[backgroundColor, styles.filterContainer]}>
      <Text style={[styles.textFilter, textColor, {flexDirection: 'row'}]}>
        {item?.icon &&
          (item?.icon === 'Sort' ? (
            <Image source={require('../assets/icon/Sort.png')} />
          ) : (
            <Image source={require('../assets/icon/Filter.png')} />
          ))}
        {item?.title}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#085D7A' : '#ffffff';
    const color = item.id === selectedId ? 'white' : 'grey';
    const customPress = async item => {
      await setSelectedId(item.id);
      await customAction;
    };
    return (
      <Item
        item={item}
        onPress={() => customPress(item)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default FilterItem;
