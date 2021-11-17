import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    shadowOpacity: 1,
    backgroundColor: 'white',
    marginBottom: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  headerName: {
    marginLeft: 10,
    fontSize: 19,
    fontWeight: '500',
  },
});

export default styles;
