import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import I18n from 'react-native-i18n';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from './Button';
import {Colors, Fonts, Metrics} from '../themes';

export const ChangePassword = ({navigation}) => {
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {}, []);

  return (
    <KeyboardAwareScrollView
      scrollEnabled
      showsVerticalScrollIndicator={false}
      enableAutomaticScroll>
      <View style={styles.container}>
        <Text style={styles.textHeaderTitle}>{I18n.t('Change Password')}</Text>

        <View style={styles.dropdownContainer}>
          <View style={{flex: 0.8}}>
            <Text style={styles.textLeftItem}>{I18n.t('Old Password')}: </Text>
          </View>

          <View style={{flex: 1.2}}>
            <TextInput
              ref={oldPasswordRef}
              onSubmitEditing={() => newPasswordRef.current.focus()}
              style={styles.textInput}
              placeholder=""
              onChangeText={(text) => setOldPassword(text)}
              defaultValue={oldPassword}
            />
          </View>
        </View>

        <View style={styles.dropdownContainer}>
          <View style={{flex: 0.8}}>
            <Text style={styles.textLeftItem}>{I18n.t('New Password')}: </Text>
          </View>
          <View style={{flex: 1.2}}>
            <TextInput
              ref={newPasswordRef}
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
              style={styles.textInput}
              placeholder=""
              onChangeText={(text) => setNewPassword(text)}
              defaultValue={newPassword}
            />
          </View>
        </View>
        <View style={styles.dropdownContainer}>
          <View style={{flex: 0.8}}>
            <Text style={styles.textLeftItem}>
              {I18n.t('Confirm Password')}:{' '}
            </Text>
          </View>
          <View style={{flex: 1.2}}>
            <TextInput
              ref={confirmPasswordRef}
              style={styles.textInput}
              placeholder=""
              onChangeText={(text) => setConfirmPassword(text)}
              defaultValue={confirmPassword}
            />
          </View>
        </View>

        <Button
          textStyle={styles.textButton}
          containerStyle={styles.buttonContainer}
          name="Save"
          onClick={() => alert('Save')}>
          <MaterialCommunityIcons
            style={{marginRight: Metrics.WIDTH * 0.015}}
            name="bookmark-multiple"
            size={Fonts.moderateScale(14)}
            color={Colors.WHITE}
          />
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.WIDTH * 0.025,
    paddingVertical: Metrics.HEIGHT * 0.025,
  },
  textHeaderTitle: {
    fontFamily: Fonts.type.semiBold,
    letterSpacing: -0.5,
    fontSize: Fonts.moderateScale(Fonts.size.medium),
    color: Colors.BLACK,
  },
  title: {
    marginHorizontal: Metrics.WIDTH * 0.02,
    marginVertical: Metrics.HEIGHT * 0.01,
  },

  dropdownContainer: {
    alignItems: 'center',
    marginTop: Metrics.HEIGHT * 0.01,
    flexDirection: 'row',
  },
  textLeftItem: {
    marginRight: Metrics.HEIGHT * 0.03,
    textAlign: 'left',
    fontSize: Fonts.moderateScale(Fonts.size.small),
  },
  textRightItem: {},
  textInput: {
    paddingLeft: Metrics.WIDTH * 0.02,
    height: Metrics.HEIGHT * 0.06,
    borderWidth: 1,
    borderColor: Colors.LITEGRAY,
    marginTop: Metrics.HEIGHT * 0.005,
    marginRight: Metrics.HEIGHT * 0.0005,
    marginBottom: Metrics.HEIGHT * 0.005,
    borderRadius: 4,
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
  buttonContainer: {
    backgroundColor: Colors.TEMPLATE_COLOR_PURPLE,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: Metrics.HEIGHT * 0.01,
  },
  textButton: {
    color: Colors.WHITE,
  },
});
