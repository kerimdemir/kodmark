import {AppRegistry, Text, TextInput, YellowBox} from 'react-native';

import {setCustomTextInput, setCustomText} from 'react-native-global-props';
import App from './src/App';

import {Fonts} from './src/themes';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);
console.disableYellowBox = true;
// Creating the custom props that I want that will be plugged into each function
const customTextInputProps = {
    underlineColorAndroid: 'rgba(0,0,0,0)',
};
const customTextProps = {
    style: {
        // fontSize: 12,
        fontFamily: Fonts.type.medium,
        color: 'black',
        backgroundColor: 'transparent',
    },
};

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);
console.disableYellowBox = true;
AppRegistry.registerComponent('kodmark', () => App);
