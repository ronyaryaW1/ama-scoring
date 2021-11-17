/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {prefetchConfiguration} from 'react-native-app-auth';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style/Home.style';
import getData from '../../../components/GetData';
import {AuthConfig, defaultAuthState} from '../../../config/Auth.cfg';
import filterJson from './json/filter.json';
import dataJson from './json/data.json';
import FilterItem from '../../../components/FilterItem';

const Home = ({navigation}) => {
  const [data, setData] = useState(defaultAuthState);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(async () => {
    getData().then(jsonValue => setData(jsonValue));
    prefetchConfiguration({
      warmAndPrefetchChrome: Platform.OS === 'android',
      ...AuthConfig,
    });
  }, []);
  console.log('ini data: ', data);

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
      <Text style={[styles.textFilter, textColor]}>
        {item?.title || titles}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#085D7A' : '#ffffff';
    const color = item.id === selectedId ? 'white' : 'grey';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../../assets/icon/profile.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <Image
          source={require('../../../assets/icon/Bell_light.png')}
          style={styles.bellIcon}
        />
      </View>
      {/* Card Scoring*/}
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            flexWrap: 'wrap',
          }}>
          {/* <Shadow distance={7} radius={20} offset={[0, 2]}> */}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#DBE7EB', '#EFF2EA', '#FAF8EA']}
            style={[styles.cardContainer]}>
            <View style={styles.titleContainer}>
              {/* <Image
              source={require('../../../assets/icon/scoringIcon.png')}
              style={styles.icon}
            /> */}
              <Text style={styles.h1}>Scoring</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.h1}>10</Text>
              <Text style={styles.h2}>Ideas need scoring</Text>
            </View>

            <View style={styles.actionContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Scoring')}>
                <Text style={styles.h3}>Klik and scoring now</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          {/* </Shadow> */}

          <View style={{height: 30}} />
          {/* Card Drafts */}
          {/* <Shadow distance={7} radius={20} offset={[0, 2]}> */}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#FAF8EA', '#EFF2EA', '#DBE7EB']}
            style={[styles.cardContainer, {marginLeft: 5}]}>
            <View style={styles.titleContainer}>
              {/* <Image
              source={require('../../../assets/icon/draftsIcon.png')}
              style={styles.icon}
            /> */}
              <Text style={styles.h1}>Drafts</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.h1}>4</Text>
              <Text style={styles.h2}>Ideas need submit</Text>
            </View>
            <View style={styles.actionContainer}>
              <Text style={styles.h3}>Klik and Submit now</Text>
            </View>
          </LinearGradient>
          {/* </Shadow> */}
          <View style={{height: 30}} />
          {/* Card Submitted */}
          {/* <Shadow distance={4} radius={10} offset={[0, 1]}> */}
          <LinearGradient
            colors={['#DCE8EB', '#E9EEE8', '#FDF9EA']}
            style={[styles.cardContainer, {marginTop: 15}]}>
            <View style={styles.titleContainer}>
              {/* <Image
              source={require('../../../assets/icon/submittedIcon.png')}
              style={styles.icon}
            /> */}
              <Text style={styles.h1}>Submitted</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.h1}>3</Text>
              <Text style={styles.h2}>Ideas have been submitted</Text>
            </View>
            <View style={styles.actionContainer}>
              <Text style={styles.h3}>Klik and See details</Text>
            </View>
          </LinearGradient>
          {/* </Shadow> */}
          <LinearGradient
            colors={['#DCE8EB', '#E9EEE8', '#FDF9EA']}
            style={[styles.cardContainer, {marginTop: 15, marginLeft: 5}]}>
            <View style={styles.titleContainer}>
              <Text style={styles.h1}>Compare</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.h1}>3</Text>
              <Text style={styles.h2}>Ideas need scoring</Text>
            </View>
            <View style={styles.actionContainer}>
              <Text style={styles.h3}>Klik and See details</Text>
            </View>
          </LinearGradient>
          {/* Top Scores */}
          <View style={styles.containerTopScore}>
            <Text style={styles.textTopScores}>Top Scores</Text>
            {/* filter Item */}
            <View style={{marginTop: 12}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={filterJson}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
              />
              {/* <FilterItem data={filterJson} /> */}
            </View>
            {/* content top score */}
            <View style={{marginTop: 24, marginBottom: 12}}>
              {dataJson.map(x => {
                console.log('cxcx', dataJson[0]);
                // let backgroundColor;
                // if (dataJson[0]) {
                //   backgroundColor = '#FFD700';
                // } else if (dataJson[1]) {
                //   backgroundColor = 'grey';
                // } else if (dataJson[2]) {
                //   backgroundColor = '#D89A5D';
                // }

                return (
                  <View style={styles.containetScoreContent}>
                    <View
                      style={{
                        marginVertical: 45,
                        width: 28,
                        height: 28,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FFD700',
                        marginHorizontal: 12,
                      }}>
                      <Text style={{color: '#fff'}}>{x.id}</Text>
                    </View>
                    <View>
                      <View style={{width: 272}}>
                        <Text style={styles.titleScore}>{x.title}</Text>
                      </View>
                      <Text style={styles.textTeam}>{x.desc}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View style={styles.categoryScore}>
                          <Text style={styles.textCategory}>{x.category}</Text>
                        </View>
                        <View style={styles.categoryScore}>
                          <Text style={styles.textCategory}>{x.value}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
