import {Dimensions} from 'react-native';
import {Fonts} from './index';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const screenGuidelineBaseWidth = 350;
const screenGuidelineBaseHeight = 680;
const scale = (size) => (screenWidth / screenGuidelineBaseWidth) * size;
const verticalScale = (size) =>
  (screenHeight / screenGuidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const type = {
  bold: 'Montserrat-Bold',
  black: 'Montserrat-Black',
  blackItalic: 'Montserrat-BlackItalic',
  boldItalic: 'Montserrat-BoldItalic',
  extraBold: 'Montserrat-ExtraBold',
  extraBoldItalic: 'Montserrat-ExtraBoldItalic',
  extraLight: 'Montserrat-ExtraLight',
  extraLightItalic: 'Montserrat-ExtraLightItalic',
  italic: 'Montserrat-Italic',
  light: 'Montserrat-Light',
  lightItalic: 'Montserrat-LightItalic',
  medium: 'Montserrat-Medium',
  mediumItalic: 'Montserrat-MediumItalic',
  regular: 'Montserrat-Regular',
  semiBold: 'Montserrat-SemiBold',
  thin: 'Montserrat-Thin',
  thinItalic: 'Montserrat-ThinItalic',
};
const size = {
  input: {fontSize: moderateScale(25), fontFamily: type.base},
  big: 20,
  regular: 11,
  medium: 11,
  small: 11,
  tiny: 9,
};
// Text.defaultProps.style = { color: 'red' }
const props = {
  Text: {
    backgroundColor: 'transparent',
    fontSize: moderateScale(16),
    fontFamily: type.base,
  },
  TextInput: {
    underlineColorAndroid: 'transparent',
    keyboardType: 'numeric',
  },
};
const style = {
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
};
export default {
  type,
  size,
  props,
  style,
  scale,
  verticalScale,
  moderateScale,
};
