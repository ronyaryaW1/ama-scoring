import React, { useState, useEffect, useCallback } from 'react';
import { authorize, prefetchConfiguration } from 'react-native-app-auth';
import {
  View,
  Alert,
  Platform,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Icon,
  Input,
  Link,
  Button,
  IconButton,
  HStack,
  Divider,
  InfoIcon,
} from 'native-base';
import { AuthConfig, defaultAuthState } from '../../../config/Auth.cfg';
import getData from '../../../components/GetData';
import styles from '../style/Login.style';
import CheckBox from '@react-native-community/checkbox';

export default function App({ navigation }) {
  const [username, setUsername] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [authState, setAuthState] = useState(defaultAuthState);
  const [data, setData] = useState(defaultAuthState);

  const expiredCheck = () => {
    if (data.expireAt > moment().unix()) {
      navigation.navigate('Home');
    }
    //expired
    else {
      navigation.navigate('Login');
    }
  };

  const storeData = async () => {
    try {
      if (authState.name !== '') {
        const jsonValue = JSON.stringify(authState);
        await AsyncStorage.setItem('authState', jsonValue);
        setData(authState);
      }
    } catch (e) {
      console.log('failed to store data');
    }
  };

  const handleAuthorize = useCallback(async () => {
    try {
      const newAuthState = await authorize(AuthConfig);
      axios({
        crossDomain: true,
        method: 'post',
        url: 'http://user.desasembung.com/authorize/sso/mobile',
        data: {
          access_token: newAuthState.accessToken,
        },
        validateStatus: false,
      })
        .then(function ({ status, data }) {
          if (status === 200) {
            setAuthState({
              hasLoggedInOnce: true,
              ...data.data,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          // need handling error
        });
    } catch (error) {
      Alert.alert('Failed to log in', error.message);
    }
  }, [storeData()]);

  useEffect(async () => {
    getData().then(jsonValue => setData(jsonValue));
    prefetchConfiguration({
      warmAndPrefetchChrome: Platform.OS === 'android',
      ...AuthConfig,
    });
  }, []);
  console.log(data);
  expiredCheck();
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../../../assets/image/amoebaHitam.png')} />
        </View>
        <View style={styles.form}>
          {/* <TextInput secureTextEntry={true}  />
          <TextInput onChangeText={setUsername} value={username}/> */}
          <TextInput style={styles.inputContainer} placeholder="Username" />
          <TextInput
            style={styles.inputContainer}
            placeholder="Password"
            secureTextEntry={true}
          />

          {/* button LDAP*/}
          <TouchableOpacity>
            <View style={styles.buttonLDAP}>
              <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>
                Login
              </Text>
            </View>
          </TouchableOpacity>
          {/* line */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 0.6,
                width: '45%',
                backgroundColor: '#808080',
              }}></View>
            <Text style={{ marginLeft: 8, marginRight: 8 }}>Or</Text>
            <View
              style={{
                height: 0.6,
                width: '45%',
                backgroundColor: '#808080',
              }}></View>
          </View>
          {/* button SSO */}
          <TouchableOpacity onPress={() => handleAuthorize()}>
            <View style={styles.buttonSSO}>
              <Image
                source={require('../../../assets/icon/gitlab.png')}
                style={{ position: 'absolute', left: 20 }}></Image>
              <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>
                Login with GitLab
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: 12,
                marginRight: 2,
              }}>
              Don't have an account?{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: 12,
                color: '#085D7A',
              }}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
