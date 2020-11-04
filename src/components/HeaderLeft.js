import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';
import React from 'react';
import {Fonts, Metrics} from '../themes';

export const HeaderLeft = ({visibleModal}) => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <TouchableOpacity
      style={{marginLeft: Metrics.WIDTH * 0.05}}
      onPress={() => visibleModal(false)}>
      <Ionicons name="ios-arrow-back" size={Fonts.moderateScale(30)} />
    </TouchableOpacity>
    <Text
      style={{
        marginLeft: Metrics.WIDTH * 0.05,
        fontSize: Fonts.moderateScale(15),
      }}>
      {' '}
    </Text>
  </View>
);
