import {StyleSheet, View, Image} from 'react-native';
import DatePicker from 'react-native-datepicker';
import React from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors, Fonts, Metrics} from '../themes';

const DatePickerComponent = ({
  data,
  placeholder,
  value = '',
  selectedValue = value,
  selectedData,
}) => {
  value = data[0].value;

  return (
    <View style={{alignItems: 'center'}}>
      <DatePicker
        style={styles.dropdownContainerStyle}
        date="20.02.2020"
        mode="date"
        placeholder="select date"
        format="DD.MM.YYYY"
        minDate="01.01.2020"
        maxDate="01.12.2020"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            borderWidth: 0,
            marginLeft: Metrics.WIDTH * 0.05,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          //console.log(date);
        }}
      />
    </View>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
  dropdownStyle: {
    width: '100%',
    height: Metrics.HEIGHT * 0.053,
  },

  inputContainerStyle: {
    textAlign: 'center',
    borderBottomColor: 'transparent',
  },

  dropdownContainerStyle: {
    textAlign: 'center',
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
    resizeMode: 'contain',
    tintColor: '#777777',
  },
});
