import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#085D7A',
    justifyContent:'center'
  },
  logo:{
    width: '70%',
    alignItems: 'center',
    marginBottom: 50,
  }
  
});

export default styles;
