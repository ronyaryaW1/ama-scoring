import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filter: {
    flexDirection: 'row',
  },

  // Modal View style
  centeredcontainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 0.2,
    paddingBottom: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 200,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttoncancel: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#085D7A',
    marginTop: 15,
    width: '100%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#085D7A',
    alignSelf: 'flex-end',
  },
  save: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#085D7A',
    marginBottom: 10,
    color: 'black',
    height: 35,
    fontSize: 12,
  },
  h2: {
    fontSize: 14,
    fontWeight: '200',
    fontFamily: 'Roboto',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  textContent: {
    fontSize: 20,
    color: 'black',
  },
  textReset: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#085D7A',
  },
  header: {
    height: '7.2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    shadowOpacity: 1,
    backgroundColor: 'white',
    marginBottom: 5,
    elevation: 3,
  },
  profileContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  name: {
    marginLeft: 30,
    fontSize: 19,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  bellIcon: {
    width: 24,
    height: 24,
    borderRadius: 50,
    marginRight: 16,
  },
  imageModal: {
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default styles;
