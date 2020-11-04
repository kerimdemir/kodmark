import React, {useEffect} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';
import I18n from 'react-native-i18n';
import Header from '../../../components/Header';

const Catalog = ({navigation, call}) => {
  useEffect(() => {}, []);

  function handleClick() {
    Linking.canOpenURL(
      'http://kodmark.mineralajans.com/Catalog/Catalog.html',
    ).then((supported) => {
      if (supported) {
        Linking.openURL('http://kodmark.mineralajans.com/Catalog/Catalog.html');
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  }

  return (
    <View style={{flex: 1}}>
      <Header callback={(a) => call('1')} navigation={navigation} />
      <WebView style={{flex:1}}
        source={{uri: 'http://kodmark.mineralajans.com/Catalog/Catalog.html'}}
      />
      <TouchableOpacity onPress={handleClick}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'right',
            backgroundColor: 'white',
            padding: 15,
            textDecorationLine: 'underline',
          }}>
          {' '}
          {I18n.t('Open on website')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Catalog;
