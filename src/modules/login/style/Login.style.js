import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 48,
    marginBottom: 30,
  },
  form: {
    width: '90%',

  },
  inputContainer: {
    height: 48,
    borderColor: '#231F20',
    borderWidth: 0.3,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 16,
  },

  username: {
    width: '80%',
  },
  buttonLDAP: {
    backgroundColor: '#085D7A',
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonSSO: {
    backgroundColor: '#E24329',
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 50,
  },
});

export default styles;
