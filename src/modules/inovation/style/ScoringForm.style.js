import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        paddingTop: 8,
        marginBottom: 64
    },
    bottomContainer: {
        height: 64,
        width: '100%',

        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    totalScoreContainer: {
        flex: 1.2,

        paddingLeft: 16,
        paddingTop: 10
    },
    buttonContainer: {
        flex: 3,

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonDraft: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderColor: '#085D7A',
        borderWidth: 1,
    },
    buttonSubmit: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#085D7A',
        borderRadius: 5,
    }, componentContainer: {
        height: windowHeight * 0.2265,
        backgroundColor: '#FFFFFF',
        marginBottom: 4,
        flexDirection: 'row',
        padding: 12,

    },
    number: {
        flex: 0.5,

        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: 4,
    },
    contentContainer: {
        flex: 10,

    },
    questionContainer: {
        flex: 2,

    },
    sliderContainer: {
        flex: 2,

    },
    pointContainer: {
        flex: 2,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    titleSliderContainer: {
        height: 22,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    slider: {
        flex: 1,

        justifyContent: 'center'
    },
    h1: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        color: '#231F20',
        lineHeight: 23,
    },
    h2: {
        fontSize: 13,
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        color: '#085D7A',
    },
    h3: {
        fontSize: 13,
        fontWeight: '300',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        color: '#231F20',
        textAlign: 'justify',
        lineHeight: 20,
    },
    inputPoint: {
        width: 40,
        height: 32,

        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#085D7A',
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default styles;
