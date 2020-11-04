import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import I18n from 'react-native-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts, Metrics} from '../themes';

export const NoDataFound = () => (
    <View style={styles.container}>
        <MaterialCommunityIcons name="database-remove" size={42}/>
        <Text style={styles.text}>{I18n.t('No Data Found')}</Text>
    </View>
);
export default NoDataFound;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: Metrics.HEIGHT * 0.2,
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        color: 'gray',
        textAlign: 'center',
        fontSize: Fonts.moderateScale(Fonts.size.small),
    },
});
