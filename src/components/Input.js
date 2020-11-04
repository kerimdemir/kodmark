import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, Metrics} from '../themes';
import I18n from 'react-native-i18n';

const Input = ({secureTextEntry = false, keyboardType = 'default', multiline = false, title, defaultValue, placeholder, value = '', style, callbackInputText}) => (
    // value = data[0].value;
    <View style={styles.dropdownContainer}>
        <View style={{flex: 0.8}}>
            <Text style={styles.textLeftItem}>{I18n.t(title)}: </Text>
        </View>
        <View style={{flex: 1.2}}>
            <TextInput keyboardType={keyboardType} multiline={multiline}
                       secureTextEntry={secureTextEntry}
                       underlineColorAndroid={'transparent'}
                       style={{...styles.textInput, style, height: multiline ? 100 : 50}}
                       placeholder={I18n.t(placeholder)}
                       onChangeText={(text) => callbackInputText(text)}
                       defaultValue={defaultValue}
            />
        </View>
    </View>
);
export default Input;

const styles = StyleSheet.create({
    dropdownContainer: {marginTop: 10},
    dropdownStyle: {
        width: '100%',
        height: Metrics.HEIGHT * 0.053,

    },

    inputContainerStyle: {
        borderBottomColor: 'transparent',
    },

    dropdownContainerStyle: {
        paddingLeft: Metrics.WIDTH * 0.02,
        height: Metrics.HEIGHT * 0.06,
        borderWidth: 1,
        borderColor: Colors.LITEGRAY,
        marginTop: Metrics.HEIGHT * 0.005,
        marginBottom: Metrics.HEIGHT * 0.005,
        borderRadius: 4,
    },
    viewIconContainer: {
        height: Metrics.HEIGHT * 0.053,
        alignItems: 'center',
    },

    viewIcon: {
        marginTop: Metrics.HEIGHT * 0.009,
        width: Fonts.moderateScale(30),
        height: Fonts.moderateScale(30),
    },
    textInput: {
        paddingLeft: Metrics.WIDTH * 0.02,
        height: Metrics.HEIGHT * 0.06,
        borderWidth: 1,
        borderColor: Colors.LITEGRAY,
        marginTop: Metrics.HEIGHT * 0.005,
        marginRight: Metrics.HEIGHT * 0.0005,
        marginBottom: Metrics.HEIGHT * 0.005,
        marginLeft: Metrics.HEIGHT * 0.005,
        borderRadius: 4,
        fontSize: Fonts.moderateScale(Fonts.size.medium),

    },
    textInputMultiLine: {
        paddingLeft: Metrics.WIDTH * 0.02,
        height: Metrics.HEIGHT * 0.2,
        borderWidth: 1,
        borderColor: Colors.LITEGRAY,
        marginTop: Metrics.HEIGHT * 0.005,
        marginRight: Metrics.HEIGHT * 0.0005,
        marginBottom: Metrics.HEIGHT * 0.005,
        borderRadius: 4,
    },
});
