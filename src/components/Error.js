import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Colors} from '../themes';

const Error = ({errorData, errorClose}) => {
  const [show, setShow] = useState(true);
  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    errorClose();
  };

  return (
    <View style={styles.container}>
      <AwesomeAlert
        useNativeDriver
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        show={show}
        showProgress={false}
        message={errorData.data ? Object.values(errorData.data[0].errors) : ''}
        title={errorData.message ? errorData.message : 'Error'}
        showCancelButton={false}
        showConfirmButton
        contentContainerStyle={styles.contentContainer}
        // cancelText=""
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          handleClose();
        }}
        onConfirmPressed={() => {
          handleClose();
        }}
      />
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    minHeight: 100,
    minWidth: 200,
    borderWidth: 1,
    borderColor: '#DD6B55',
    borderRadius: 3,
    shadowColor: '#DD6B55',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },
});
