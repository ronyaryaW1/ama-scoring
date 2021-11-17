import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#085D7A'
  },
  line: {
    alignItems: 'center',
    display: 'flex',
    resizeMode: 'cover',
    height: '28%',
    width: windowWidth
  },
  wrap: {
    padding: 20
  },
  title: {
    flexDirection: 'row'
  },
  content: {
    flexDirection: 'row',
    marginTop: 10
  },
  textwhitetitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textredtitle: {
    color: '#FF0001',
    fontSize: 18,
    fontWeight: 'bold'
  },
  redtitlecontent: {
    color: '#FF0001',
    fontSize: 14,
    fontWeight: 'bold'
  },
  whitetitlecontent: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  textcontent: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
    width: '40%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#FFDE00',
  },
  getstarted: {
    color: '#085D7A',
    fontWeight: 'bold'
  },
  mainimage: {
    alignItems: 'center',
    display: 'flex',
    resizeMode: 'cover',
    width: windowWidth,
    marginTop: 70
  }
});

export default styles;
