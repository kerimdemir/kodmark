import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Fonts, Images} from '../../../themes';
import I18n from 'react-native-i18n';

const VisionMission = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>

      <View style={styles.subContainer}>
        <View style={styles.view}>
          <Image source={Images.vision} style={styles.image} />
          <Text style={styles.textVision}>{I18n.t('VISION TEXT')}</Text>
        </View>
        <View style={styles.view}>
          <Image source={Images.mission} style={styles.image} />
          <Text style={styles.textMission}>{I18n.t('MISSION TEXT')}</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={{...styles.view,marginTop:15}}>
          <Image source={Images.values} style={styles.image} />
          <Text style={styles.textValues}>{I18n.t('VALUES TEXT')}</Text>
        </View>
      </View>
    </View>
  );
};

export default VisionMission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
  },
  view: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textMission: {
    textAlign: 'right',

    fontSize: Fonts.moderateScale(Fonts.size.medium),
  },
  textVision: {
    textAlign: 'left',
    width: '70%',
    fontSize: Fonts.moderateScale(Fonts.size.medium),
  },
  textValues: {
      marginBottom: 10,
    textAlign: 'center',
    fontSize: Fonts.moderateScale(Fonts.size.medium),
  },
});
