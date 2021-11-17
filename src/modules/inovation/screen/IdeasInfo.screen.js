import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IdeasInfoContent from '../../../components/IdeasInfoContent';

const IdeasInfo = () => {
  return (
    <View style={styles.container}>
      <IdeasInfoContent />

    </View>
  );
};

export default IdeasInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});
