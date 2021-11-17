/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import styles from '../style/Scoring.style';

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

import CardScoring from '../../../components/CardScoring';
import {FilterFeature} from '../../../components/FilterFeature';
import CheckBox from 'react-native-check-box';
// import {CheckBox} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import FilterItem from '../../../components/FilterItem';
import {Checkbox, NativeBaseProvider} from 'native-base';

const Scoring = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const getData = require('../json/filter.json');
  const getContent = require('../json/data.json');
  const [data, setData] = useState(getData);
  const [isOpen, setisOpen] = React.useState(false);
  const [check, setCheck] = useState(false);
  const Sort = require('../../../assets/icon/Sort.png');
  const Filter = require('../../../assets/icon/Filter.png');
  const SortJson = require('../json/sort.json');
  const [selecTId, setSelectedId] = useState();
  console.log('isSelect', selecTId);

  // filter
  const [content, setContent] = useState(getContent);
  // const newData =
  //   selecTId !== 'All' ? content.filter(x => x.theme === selecTId) : content;
  // useEffect(() => {
  //   selecTId !== undefined ? setContent(newData) : setContent(getContent);
  // }, [selecTId]);

  // console.log('newData', newData);
  // const handleCheck = () => {
  //   content.filter(item => {
  //     item.theme;
  //   });
  //   data.filter(item => {
  //     item.title;
  //     console.log(item.title);
  //   });
  //   setModalVisible(false);
  // };
  let newData;
  const handleCheck = () => {
    newData =
      selecTId !== 'All' ? content.filter(x => x.theme === selecTId) : content;
    setContent(newData);
    setModalVisible(false);
  };

  const onPressSort = () => {
    setSelectedId('Sort');
    setModalVisible(true);
  };
  const onPressFIlter = () => {
    setSelectedId('Filter');
    setModalVisible(true);
  };

  let selected = data.filter(filter => filter.checked);
  const MenuBar = ({onPress, title}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: title === selecTId ? '#085D7A' : 'white',
          borderColor: '#231F20',
          borderWidth: 0.5,
          borderRadius: 8,
          marginHorizontal: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}>
          {title === 'Sort' && (
            <View style={{justifyContent: 'center', marginRight: 8}}>
              <Image source={Sort} style={{width: 16, height: 16}} />
            </View>
          )}
          {title === 'Filter' && (
            <View style={{justifyContent: 'center', marginRight: 8}}>
              <Image source={Filter} style={{width: 16, height: 16}} />
            </View>
          )}
          <Text style={{color: title === selecTId ? 'white' : 'grey'}}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const Menutab = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollMenu}>
      <MenuBar title="Sort" onPress={() => onPressSort()} />
      <MenuBar title="Filter" onPress={() => onPressFIlter()} />
      <MenuBar title="All" onPress={() => setSelectedId('All')} />
      <MenuBar
        title="Agricultural Technology"
        onPress={() => setSelectedId('Agricultural Technology')}
      />
      <MenuBar
        title="Medical Technology"
        onPress={() => setSelectedId('Medical Technology')}
      />
    </ScrollView>
  );
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../assets/icon/back.png')}
                style={styles.imageBack}
              />
            </TouchableOpacity>
            <Text style={styles.name}>Scoring</Text>
          </View>
          <Image
            source={require('../../../assets/icon/search.png')}
            style={styles.bellIcon}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.centeredcontainer}>
              <View style={styles.modalView}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    source={require('../../../assets/icon/line.png')}
                    style={styles.imageModal}
                  />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Text style={styles.textTitle}>
                    {selecTId === 'Sort ' ? 'Filter' : 'Sort'}
                  </Text>
                  {}
                  <TouchableOpacity onPress={() => setSelectedId()}>
                    <Text style={styles.textReset}>Reset Filter</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.textTitle}>Theme</Text>
                  <FlatList
                    data={selecTId === 'filter' ? data : SortJson}
                    renderItem={({item, index}) => (
                      <View key={index} style={styles.contentContainer}>
                        <Text style={styles.textContent}>{item.title}</Text>
                        <Checkbox
                          value={item.title}
                          accessibilityLabel="menu-filter"
                          onPress={() => setSelectedId(item.title)}
                        />
                      </View>
                    )}
                  />
                  <FlatList
                    data={selected}
                    renderItem={({item}) => (
                      <View style={styles.contentContainer}>
                        <Text style={styles.textContent}>{item.title}</Text>
                      </View>
                    )}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <View style={styles.buttoncancel}>
                    <TouchableOpacity
                      onPress={() => {
                        handleCheck(selecTId);
                      }}>
                      <Text style={styles.save}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* EndPopup */}

        {/* sort */}

        {/* Content */}
        {/* <ScrollView> kalo udah make flatlist ga perlu scrollview bang */}
        <FlatList
          ListHeaderComponent={Menutab}
          data={content}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('InnovationTabs')}>
              <CardScoring
                content={item.title}
                title={item.desc}
                filter={item.theme}
                category={item.category}
              />
            </TouchableOpacity>
          )}
        />

        {/* </ScrollView> */}
      </View>
    </NativeBaseProvider>
  );
};

export default Scoring;

// let selected = data.filter(filter => filter.isChecked);
// //   const [checked2, setChecked2] = useState(false);
// //   const [checked3, setChecked3] = useState(false);
// //   const [checked4, setChecked4] = useState(false);
// {
//   /* Filter */
// }
//   <View style={styles.filter}>
//   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//     <FilterFeature
//       filter="Sort"
//       icon={require('../../../assets/icon/Sort.png')}
//     />

//     <FilterFeature
//       filter="Filter"
//       icon={require('../../../assets/icon/Filter.png')}
//       onPress={() => setModalVisible(true)}
//     />
//     <FilterFeature filter="All" />
//     <FilterFeature filter="Theme 1" />
//     <FilterFeature filter="Theme 2" />
//     <FilterFeature filter="Theme 3" />
//     <FilterFeature filter="Theme 4" />
//     <FilterFeature filter="Theme 5" />
//   </ScrollView>
// </View>
