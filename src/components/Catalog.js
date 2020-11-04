import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';

const Catalog = ({navigation}) => {
  useEffect(() => {}, []);
  return <WebView source={{uri: 'https://facebook.github.io/react-native/'}} />;
};

export default Catalog;
