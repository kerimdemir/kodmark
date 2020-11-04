import {I18nManager, Platform, StyleSheet} from 'react-native';
import {Images, Metrics, Colors, Fonts} from '../../themes';

const styles = StyleSheet.create({

    container: {
        padding: 15,
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        marginTop: Metrics.HEIGHT * 0.03,
        marginRight: Metrics.HEIGHT * 0.03,

    },
    image: {
        width: Metrics.WIDTH * 0.3,
        height: Metrics.HEIGHT * 0.1,
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        top: 0,
    },

    headerTitle: {
        marginTop: Metrics.HEIGHT * 0.001,

        ...Fonts.size.input,
        fontSize: Fonts.moderateScale(18),


    },
    subTitle: {
        marginTop: Metrics.HEIGHT * 0.01,
        marginLeft: Metrics.WIDTH * 0.05,
        fontSize: Fonts.moderateScale(12),
    },
 subComp: {
        fontSize: Fonts.moderateScale(12),
    },


    forgotPasswordContainer:
        {
            alignSelf: 'flex-end',
            paddingTop: Metrics.HEIGHT * 0.02,
            paddingLeft: Metrics.WIDTH * 0.02,
            paddingRight: Metrics.WIDTH * 0.02,
            paddingBottom: Metrics.HEIGHT * 0.02,
        },
    forgotPasswordText: {
        textDecorationLine: 'underline',
        textDecorationColor: 'gray',
    },

    signInContainer: {


        alignSelf: 'center',
        backgroundColor: Colors.LITEGRAY,
        borderWidth: 1,
        borderColor: Colors.graylite,
        padding: 10,
        margin: 10,
        borderRadius: 10,

    },

    messageView: {},
    messageText: {},
    messageSubText: {},
    signUpContainer: {
        alignItems: 'center',
        paddingTop: 30,
    },
    signUpText: {
        textDecorationLine: 'underline',
        textDecorationColor: 'gray',
    },

    textInput: {

        backgroundColor: 'transparent',
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: Metrics.HEIGHT * 0.01,
        marginTop: Metrics.HEIGHT * 0.02,
        marginLeft: Metrics.WIDTH * 0.04,
        marginRight: Metrics.WIDTH * 0.04,


    },



});
export default styles;
