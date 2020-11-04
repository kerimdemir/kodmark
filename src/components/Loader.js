import React, {useEffect, useState} from 'react';
import {View, Image, Easing, Animated, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Images} from '../themes';

const Loader = ({}) => {
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  useEffect(() => {
    StartImageRotate();
  }, []);

  function StartImageRotate() {
    rotateValue.setValue(0);

    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => StartImageRotate());
  }

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <View style={styles.container} />

      <View style={styles.view}>
        <Animatable.View animation="bounceIn">
          <Animated.Image
            style={{...styles.image, transform: [{rotate: RotateData}]}}
            source={Images.logo_img}
          />
        </Animatable.View>
      </View>
    </>
  );
};

export default Loader;
const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.LITEGRAY,
    opacity: 0.3,
    position: 'absolute',
  },
  view: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  image: {
    height: 100,
    width: 100,
  },
});
