import { Center } from 'native-base';
import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image ,Text} from 'react-native';
import styles from '../style/Splash.style';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1500);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/image/amoebaPutih.png')}/>
      </View>
      <ActivityIndicator size='large' color="#F9CC2C" />
    </View>
  );
};

export default Splash;
