import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, Images} from '../../../themes';
import I18n from 'react-native-i18n';

const VisionMission = ({navigation}) => {
    useEffect(() => {
    }, []);

    return (
        <View style={styles.container}>
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                    opacity: 0.05,
                    position: 'absolute',
                }}
                source={require('../../../assets/kodmark/logo/misyon.png')}
            />
            <View style={styles.subContainer}>
                <View style={{...styles.view, marginTop: 15}}>
                    <Text style={styles.textHeader}>{I18n.t('VISION')}</Text>
                    <Text style={styles.textVision}>{I18n.t('VISION TEXT')}</Text>
                </View>
            </View>
            <View style={styles.subContainer}>
                <View style={{...styles.view, marginTop: 15}}>
                    <Text style={styles.textHeader}>{I18n.t('MISSION')}</Text>
                    <Text style={styles.textMission}>{I18n.t('MISSION TEXT')}</Text>
                </View>
            </View>

            <View style={styles.subContainer}>
                <View style={{...styles.view, marginTop: 15}}>
                    <Text style={styles.textHeader}>{I18n.t('VALUES')}</Text>
                    <Text style={styles.textValues}>{I18n.t('VALUES TEXT')}</Text>
                </View>
            </View>
        </View>
    );
};

export default VisionMission;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        flexDirection: 'row',
    },
    view: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    textMission: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.moderateScale(Fonts.size.medium),
        color: 'black',
        textAlign: 'left',
    },
    textHeader: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.moderateScale(Fonts.size.regular),
        color: Colors.TEMPLATE_COLOR_RED,
        textAlign: 'left',
    },
    textVision: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.moderateScale(Fonts.size.medium),
        color: 'black',
        textAlign: 'left',
    },
    textValues: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.moderateScale(Fonts.size.medium),
        color: 'black',
        textAlign: 'left',
    },
});
