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
  TextInput,
} from 'react-native';

import CardScoring from '../../../components/CardScoring';
import {FlatList} from 'react-native-gesture-handler';
import {Checkbox, KeyboardAvoidingView, NativeBaseProvider} from 'native-base';
import _ from 'lodash';

const Scoring = props => {
  const {navigation, route} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const getData = require('../json/filter.json');
  const getContent = require('../json/data');
  const [data, setData] = useState(getData);
  const SortJson = require('../json/sort.json');
  const [selecTId, setSelectedId] = useState();
  const [selectFilter, setSelectFilter] = useState();
  const [filterSelect, setFilterSelect] = useState(false);
  const isCompare = props?.route?.params?.route === 'compare';
  const [isReset, setIsReset] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState();

  const [content, setContent] = useState(getContent);
  const handleChange = async id => {
    await setFilterSelect(true);
    let temp = data.map(product => {
      if (id === product.id) {
        return {...product, isChecked: !product.isChecked};
      }
      return product;
    });
    await setData(temp);
    await setSelectedId(id);
  };
  let selectedFilter = data.filter(product => product.isChecked);

  let newContent;

  if (filterSelect === true) {
    newContent = getContent.filter(
      x =>
        x.theme === selectedFilter[0]?.title ||
        x.theme === selectedFilter[1]?.title ||
        x.theme === selectedFilter[2]?.title ||
        x.theme === selectedFilter[3]?.title,
    );
  } else {
    newContent = getContent.filter(x => x.theme === selecTId);
  }

  const onPressSort = () => {
    setSelectFilter('Sort');
    setModalVisible(true);
  };
  const onPressFIlter = () => {
    setSelectFilter('Filter');
    setModalVisible(true);
    setData(getData);
    setSelectedId();
    console.log('daftasa', data);
  };

  const onRsetFilter = () => {
    setIsReset(true);
    // setSelectFilter();
    setSelectedId();
    setData(getData);
  };

  let datas;
  if (selecTId === 'All' || selecTId === undefined) {
    datas = content;
  } else if (selecTId === 'Filter') {
    datas = content;
  } else if (selecTId === 'Sort') {
    datas = content;
  } else {
    datas = newContent;
  }

  let dataSearch;
  if (keyword !== undefined) {
    dataSearch = content?.filter(x =>
      x.title?.toLowerCase().includes(keyword?.toLowerCase()),
    );
    datas = dataSearch;
  }
  console.log('dataSearch', dataSearch);
  const menuSort = SortJson.find(x => x.title === selecTId);
  const sort = _.orderBy(datas, [menuSort?.comparator], [menuSort?.order]);
  if (menuSort !== undefined) {
    datas = sort;
  }
  const ListEmprtyData = () => (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '80%',
      }}>
      <Text>Tidak Ada Data</Text>
    </View>
  );
  let selected = data.filter(filter => filter.checked);
  const MenuBar = ({onPress, title}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor:
            title === selecTId || title === selectFilter ? '#085D7A' : 'white',
          borderColor: 'grey',
          borderWidth: 0.5,
          borderRadius: 20,
          marginHorizontal: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}>
          {title === 'Sort' && (
            <View style={{justifyContent: 'center', marginRight: 8}}>
              <Image
                source={
                  title === selectFilter
                    ? require('../../../assets/icon/sortActive.png')
                    : require('../../../assets/icon/Sort.png')
                }
                style={{width: 16, height: 16}}
              />
            </View>
          )}
          {title === 'Filter' && (
            <View
              style={{
                justifyContent: 'center',
                marginRight: 8,
                // paddingLeft: 12,
                // paddingVertical: 6,
              }}>
              <Image
                source={
                  title === selectFilter
                    ? require('../../../assets/icon/filterActive.png')
                    : require('../../../assets/icon/Filter.png')
                }
                style={{width: 16, height: 16}}
              />
            </View>
          )}
          <Text
            style={{
              color:
                title === selecTId || title === selectFilter ? 'white' : 'grey',
              // paddingVertical: 6,
              paddingRight: title !== 'Filter' || title !== 'Sort' ? 0 : 12,
            }}>
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
      style={{marginTop: 5}}>
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
      <KeyboardAvoidingView style={{flex: 1}}>
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
              {isSearch ? (
                <TextInput
                  placeholder="Search by title"
                  // onChange={text => setKeyword(text)}
                  onChangeText={setKeyword}
                  value={keyword}
                />
              ) : (
                <Text style={styles.name}>
                  {isCompare ? 'Compare' : 'Scoring'}
                </Text>
              )}
            </View>
            <TouchableOpacity onPress={() => setIsSearch(true)}>
              <Image
                source={require('../../../assets/icon/search.png')}
                style={styles.bellIcon}
              />
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={selectFilter !== undefined && modalVisible}
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
                      {selectFilter === 'Filter'
                        ? 'Filter'
                        : selectFilter === 'Sort' && 'Sort By'}
                    </Text>
                    {selectFilter === 'Filter' && (
                      <TouchableOpacity onPress={() => onRsetFilter()}>
                        <Text style={styles.textReset}>Reset Filter</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  <View style={styles.inputContainer}>
                    {selectFilter === 'Filter' && (
                      <Text style={styles.textTitle}>Theme</Text>
                    )}
                    <FlatList
                      data={selectFilter === 'Filter' ? data : SortJson}
                      renderItem={({item, index}) => (
                        <View key={index}>
                          {/* filter fitur */}
                          {selectFilter === 'Filter' && (
                            <View style={styles.contentContainer}>
                              <Text style={styles.textContent}>
                                {item.title}
                              </Text>
                              <Checkbox.Group>
                                <Checkbox
                                  value={item.title}
                                  accessibilityLabel="menu-filter"
                                  // onPress={() => setSelectedId(item.title)}
                                  onChange={() => {
                                    handleChange(item.id);
                                    // console.log('iddd', item.id);
                                  }}
                                />
                              </Checkbox.Group>
                            </View>
                          )}
                          {selectFilter === 'Sort' && (
                            <View style={styles.contentContainer}>
                              <View>
                                <Text style={styles.textContent}>
                                  {item.title}
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => setSelectedId(item.title)}>
                                <View
                                  style={{
                                    width: 14,
                                    height: 14,
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    borderColor:
                                      item.title === selecTId
                                        ? '#085D7A'
                                        : 'grey',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <View
                                    style={{
                                      width: 10,
                                      height: 10,
                                      borderRadius: 20,
                                      backgroundColor:
                                        item.title === selecTId
                                          ? '#085D7A'
                                          : '#FFFFFF',
                                      alignSelf: 'center',
                                    }}
                                  />
                                </View>
                              </TouchableOpacity>
                            </View>
                          )}
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
                  {selectFilter === 'Filter' && (
                    <View style={styles.buttonContainer}>
                      <View style={styles.buttoncancel}>
                        <TouchableOpacity
                          onPress={() => {
                            setModalVisible(false);
                          }}>
                          <Text style={styles.save}>Save</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </Modal>
          {/* EndPopup */}

          {/* Content */}
          <View style={{flex: 1}}>
            <FlatList
              ListHeaderComponent={Menutab}
              ListEmptyComponent={ListEmprtyData}
              data={datas}
              renderItem={({item}) =>
                isCompare === true ? (
                  <CardScoring data={item} route={route?.params?.route} />
                ) : (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('InnovationTabs')}>
                    <CardScoring data={item} route={route?.params?.route} />
                  </TouchableOpacity>
                )
              }
            />
            {isCompare && (
              <View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    height: 55,
                    justifyContent: 'space-between',
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    backgroundColor: '#FFFF',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#231F20',
                        fontWeight: 'bold',
                        fontSize: 14,
                      }}>
                      0
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#231F20', fontSize: 14}}>
                      Ideas have been selected
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Compare')}
                    style={{
                      backgroundColor: '#CDCDCD',
                      width: 122,
                      height: 32,
                      borderRadius: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: '100'}}>Compare 0 Ideas</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default Scoring;
