import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors, Fonts, Metrics} from '../themes';

const DropdownList = ({data, placeholder, value = '', selectedValue}) => (
  // value = data[0].value;
  <Dropdown
    useNativeDriver
    placeholder={placeholder}
    labelHeight={0}
    style={styles.dropdownStyle}
    data={data}
    overlayStyle={{backgroundColor: 'transparent'}}
    inputContainerStyle={styles.inputContainerStyle}
    containerStyle={styles.dropdownContainerStyle}
    onChangeText={(val) => {
      selectedValue(val);
    }}
    value={value}
    renderAccessory={() => (
      <View style={styles.viewIconContainer}>
        <Entypo
          size={Fonts.moderateScale(20)}
          name="select-arrows"
          color={Colors.GRAY}
          style={styles.viewIcon}
        />
      </View>
    )}
  />
);
export default DropdownList;

const styles = StyleSheet.create({
  dropdownStyle: {
    width: '100%',
    height: Metrics.HEIGHT * 0.053,
  },

  inputContainerStyle: {
    borderBottomColor: 'transparent',
  },

  dropdownContainerStyle: {
    paddingLeft: Metrics.WIDTH * 0.02,
    height: Metrics.HEIGHT * 0.06,
    borderWidth: 1,
    borderColor: Colors.LITEGRAY,
    marginTop: Metrics.HEIGHT * 0.005,
    marginBottom: Metrics.HEIGHT * 0.005,
    borderRadius: 4,
  },
  viewIconContainer: {
    height: Metrics.HEIGHT * 0.053,
    alignItems: 'center',
  },

  viewIcon: {
    marginTop: Metrics.HEIGHT * 0.009,
    width: Fonts.moderateScale(30),
    height: Fonts.moderateScale(30),
  },
});
