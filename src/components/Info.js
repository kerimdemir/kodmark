import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import I18n from 'react-native-i18n';
import React from 'react';
import {Colors, Fonts, Metrics} from '../themes';

const Info = ({text, backgroundColor = '#CFD6DE'}) => (
  <View style={{...styles.infoView, backgroundColor}}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

export const InfoView = ({children, backgroundColor = '#CFD6DE'}) => (
  <View style={{...styles.infoView, backgroundColor}}>{children}</View>
);
export default Info;

const styles = StyleSheet.create({
  infoView: {
    borderColor: '#676a6e',
    alignItems: 'center',
    paddingHorizontal: Metrics.WIDTH * 0.02,
    paddingVertical: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.01,
    marginTop: Metrics.HEIGHT * 0.01,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  infoText: {
    textAlign: 'center',
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.moderateScale(Fonts.size.small),
  },
});
