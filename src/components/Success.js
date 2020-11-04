import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import I18n from 'react-native-i18n';
import {Colors, Fonts} from '../themes';

const Success = ({data, successClose}) => {
  const [show, setShow] = useState(true);
  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    successClose();
  };

  return (
    <View style={styles.container}>
      <AwesomeAlert
        useNativeDriver
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        show={show}
        showProgress={false}
        message={I18n.t(data.description)+"\n\n\n"+I18n.t("AREAS OF USE")+":\n"+I18n.t(data.areasOfUse)}
        title={data.name}
        titleStyle={{textAlign:'center',fontFamily:Fonts.type.semiBold}}
        messageStyle={{textAlign:'center',fontSize:12}}
        showCancelButton={false}
        showConfirmButton
        contentContainerStyle={styles.contentContainer}
        // cancelText=""
        confirmText={I18n.t("OK")}
        confirmButtonColor={Colors.GREEN}
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

export default Success;

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
  },
  contentContainer: {
    padding: 20,
    minHeight: 100,
    minWidth: 200,
    borderWidth: 1,
    borderColor: Colors.GREEN,
    borderRadius: 3,
    shadowColor: Colors.GREEN,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },
});
