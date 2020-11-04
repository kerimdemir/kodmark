import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import I18n from 'react-native-i18n';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts, Metrics} from '../themes';

const ProceedButton = ({name, onClick}) => (
  <View style={styles.viewButtonContainer}>
    <TouchableOpacity onPress={()=>onClick()} style={styles.buttonContainer}>
      <Ionicons name="ios-arrow-forward" size={Fonts.moderateScale(18)} />
      <Text style={styles.textButton}> {I18n.t('PROCEED')} </Text>
    </TouchableOpacity>
  </View>
);
export default ProceedButton;

const styles = StyleSheet.create({
  viewButtonContainer: {
    alignItems: 'center',
    marginBottom: Metrics.HEIGHT * 0.03,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.TEMPLATE_COLOR,
    borderRadius: 4,
    width: Metrics.WIDTH * 0.4,
    height: Metrics.WIDTH * 0.1,
  },

  textButton: {
    color: Colors.BLACK,
    fontFamily: Fonts.type.semiBold,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
