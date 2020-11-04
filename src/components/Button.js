import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import I18n from 'react-native-i18n';
import React from 'react';
import {Colors, Fonts, Metrics} from '../themes';

const Button = ({name, onClick, containerStyle, textStyle, children}) => (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={onClick}
            style={{...styles.buttonContainer, ...containerStyle}}>
            {children}
            <Text style={{...styles.textButton, ...textStyle}}>{I18n.t(name)}</Text>
        </TouchableOpacity>
    </View>
);
export default Button;

const styles = StyleSheet.create({
    container: {flex: 1},
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: Metrics.WIDTH * 0.03,
        flexDirection: 'row',
        backgroundColor: Colors.TEMPLATE_COLOR,
        borderRadius: 5,
        width: '100%',
        height: Metrics.HEIGHT * 0.06,
    },

    textButton: {
        color: Colors.BLACK,
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.moderateScale(Fonts.size.medium),
        alignSelf: 'center',
        textAlign: 'center',
    },
});
