import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 0 : 0;

const GeneralStatusBarColor = ({backgroundColor, ...props}) => (
  <SafeAreaView style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
export default GeneralStatusBarColor;
