/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// // Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === 'light' ? true : false}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
// const removeData = async key => {
//   try {
//     await AsyncStorage.removeItem(key);
//     return true;
//   } catch (exception) {
//     return false;
//   }
// };
// const Logout = () => {
//   removeData('authState');
//   navigation.navigate('TabNavigation');
// };

import React from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../style/Main.style';

const Main = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.line}>
          <Line />
        </View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text style={styles.textwhitetitle}>Apa Itu</Text><Text style={styles.textredtitle}> IDEA</Text><Text style={styles.textwhitetitle}>BOX?</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.textcontent}><Text style={styles.redtitlecontent}>IDEA</Text><Text style={styles.whitetitlecontent}>BOX</Text> Merupakan single platform yang digunakan sebagai media sosial inovasi bagi karyawan Telkom untuk dapat menyampaikan idea dan berkolaborasi mengembangkannya.</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}><Text style={styles.getstarted}>GET STARTED</Text></TouchableOpacity>
        </View>
        <View style={styles.mainimage}>
          <MainImage />
        </View>
      </ScrollView>
    </View>
  )
}

export default Main
