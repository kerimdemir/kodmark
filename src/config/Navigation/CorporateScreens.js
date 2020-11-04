import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors, Fonts, Metrics} from '../../themes';
import Corporate from '../../pages/Corporate';
import AboutUs from '../../pages/Corporate/AboutUs';
import VisionMission from '../../pages/Corporate/VisionMission';
import Catalog from '../../pages/Corporate/Catalog';

const headerLeft = (name, navigation) => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <TouchableOpacity
      style={{marginLeft: Metrics.WIDTH * 0.05}}
      onPress={() => navigation.goBack()}>
      <Ionicons name="ios-arrow-back" size={Fonts.moderateScale(30)} />
    </TouchableOpacity>
    <Text
      style={{
        marginLeft: Metrics.WIDTH * 0.05,
        fontSize: Fonts.moderateScale(15),
      }}>
      {' '}
      {I18n.t(name)}{' '}
    </Text>
  </View>
);
const headerRight = (navigation) => (
  <View style={{marginRight: Metrics.WIDTH * 0.05}}>
    <FontAwesome name="user-circle-o" size={Fonts.moderateScale(30)} />
  </View>
);

const CorporateScreens = ({navigation}) => {
  const CorporateStack = createStackNavigator();

  return (
    <CorporateStack.Navigator initialRouteName="ACCOUNT">
      <CorporateStack.Screen
        name="Corporate"
        component={Corporate}
        options={() => ({animationEnabled: false, headerShown: false})}
      />
      <CorporateStack.Screen
        name="AboutUs"
        component={AboutUs}
        options={({route, navigation}) => ({
          animationEnabled: false,
          title: '',
          leftLabel: '',
          headerStyle: styles.headerStyle,
          headerLeft: () => headerLeft('VisionMission', navigation),
          headerRight: () => headerRight(navigation),
        })}
      />
      <CorporateStack.Screen
        name="VisionMission"
        component={VisionMission}
        options={({route, navigation}) => ({
          animationEnabled: false,
          title: '',
          leftLabel: '',
          headerStyle: styles.headerStyle,
          headerLeft: () => headerLeft('VisionMission', navigation),
          headerRight: () => headerRight(navigation),
        })}
      />
      <CorporateStack.Screen
        name="Catalog"
        component={Catalog}
        options={({route, navigation}) => ({
          animationEnabled: false,
          title: '',
          leftLabel: '',
          headerStyle: styles.headerStyle,
          headerLeft: () => headerLeft('Catalog', navigation),
          headerRight: () => headerRight(navigation),
        })}
      />
    </CorporateStack.Navigator>
  );
};

export default CorporateScreens;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.TEMPLATE_COLOR,
    shadowColor: Colors.GRAY,
  },
});
