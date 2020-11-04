import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors, Fonts, Images, Metrics} from '../../themes';
import BarcodeReaders from '../../pages/BarcodeReaders';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const headerLeft = (navigation) => (

    <Image
        source={Images.kodmark_logo1}
        style={{

            width: 120,
            height: 120,
            marginLeft: 15,
            resizeMode: 'contain',
        }}
    />
);
const headerBack = (navigation,name) => (
    <TouchableOpacity style={{
        marginLeft: 10,alignItems:'center',flexDirection:'row'
    }} onPress={() => navigation.goBack()}>

        <Ionicons
            style={styles.icon}
            color={'black'}
            name={'md-arrow-back'}
            size={30}
        />
        <Text style={{marginLeft:15,fontFamily:Fonts.type.semiBold}}> {name} </Text>
    </TouchableOpacity>
);
const headerRight = (navigation) => (
    <TouchableOpacity onPress={()=>navigation.navigate('ContactUs')} style={{marginRight: Metrics.WIDTH * 0.05}}>
        <FontAwesome5Icon
            style={styles.icon}
            color={'black'}
            name={'user-edit'}
            size={30}
        />
    </TouchableOpacity>
);

const BreadersScreens = ({navigation}) => {
  const BreadersStack = createStackNavigator();

  return (
    <BreadersStack.Navigator initialRouteName="BreadersScreens">
      <BreadersStack.Screen
        name="BreadersScreens"
        component={BarcodeReaders}
        options={({route, navigation}) => ({
            headerShown: false,
            animationEnabled: false,
            title: '',
            leftLabel: '',
            headerStyle: styles.headerStyle,
            headerLeft: () => (headerLeft(navigation)),
            headerRight: () => (headerRight(navigation)),
        })}
      />


    </BreadersStack.Navigator>
  );
};

export default BreadersScreens;

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.LITEGRAY,
        shadowColor: Colors.GRAY,
    },
});
