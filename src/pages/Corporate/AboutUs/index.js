import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import I18n from 'react-native-i18n';
import {Colors, Fonts, Metrics} from '../../../themes';

const AboutUs = ({navigation}) => {
  useEffect(() => {}, []);

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
      <Text style={styles.textWho}>{I18n.t('WHO ARE WE')}</Text>
      <Text style={styles.subTextWho}>{I18n.t('WHO ARE WE TEXT')}</Text>

      <Text style={styles.textWhat}>{I18n.t('WHAT WE DO')}</Text>
      <Text style={styles.subTextWhat}>{I18n.t('WHAT WE DO TEXT')}</Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10, padding: 10},
  textWho: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.moderateScale(Fonts.size.regular),
    color: Colors.TEMPLATE_COLOR_RED,
    textAlign: 'left',
  },
  subTextWho: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.moderateScale(Fonts.size.medium),
    color: 'black',
    textAlign: 'left',
  },
  textWhat: {
    marginTop: Metrics.HEIGHT * 0.03,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.moderateScale(Fonts.size.regular),
    color: Colors.TEMPLATE_COLOR_RED,
    textAlign: 'right',
  },
  subTextWhat: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.moderateScale(Fonts.size.medium),
    color: 'black',
    textAlign: 'right',
  },
});
