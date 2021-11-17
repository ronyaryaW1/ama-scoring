import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  header: {
    height: '7.2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    shadowOpacity: 1,
    backgroundColor: 'white',
    marginBottom: 24,
    elevation: 3,
  },
  profileContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  name: {
    marginLeft: 12,
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
  cardNew: {
    // flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cardContainer: {
    width: windowWidth * 0.44,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 13,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  titleContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 5,
  },
  countContainer: {
    flex: 2,
    alignItems: 'center',
  },
  actionContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  h1: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  h2: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  h3: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: '#E15C30',
  },
  icon: {
    marginRight: 10,
  },
  // Top Scores
  containerTopScore: {
    marginTop: 24,
    marginBottom: 12,
  },
  textTopScores: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  // filterItem
  filterContainer: {
    borderRadius: 20,
    marginRight: 8,
  },
  textFilter: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlign: 'center',
  },
  // Top ScoreContent
  containetScoreContent: {
    width: '95%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginBottom: 12,
    minHeight: 110,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  rank: {
    marginVertical: 45,
    width: 28,
    height: 28,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    marginHorizontal: 12,
  },
  titleScore: {
    paddingTop: 12,
    fontSize: 14,
    fontWeight: '700',
    color: '#231F20',
  },
  textTeam: {fontSize: 14, color: 'grey', marginTop: 4},
  categoryScore: {
    backgroundColor: '#085D7A',
    borderRadius: 20,
    marginVertical: 12,
    marginRight: 8,
  },
  textCategory: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    color: '#ffff',
  },
});

export default styles;
