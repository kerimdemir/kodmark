import React from 'react';
import {View} from 'react-native';

export const DividerHorizontal = ({height = 1, color = 'gray'}) => (
  <View style={{backgroundColor: color, height, margin: 3}} />
);

export const Divider = () => (
  <View style={{backgroundColor: 'gray', height: 1, margin: 10}} />
);

export const DividerVertical = ({height, color, style}) => (
  <View
    style={{
      height,
      width: 1,
      marginHorizontal: 3,
      backgroundColor: color,
      marginTop: 10,
      ...style,
    }}
  />
);
export default Divider;
