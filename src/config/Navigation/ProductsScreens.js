import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors, Fonts, Metrics} from '../../themes';
import PrintedLabels from '../../pages/Products/PrintedLabels';
import Products from '../../pages/Products';
import BlankLabels from '../../pages/Products/BlankLabels';
import Ribbons from '../../pages/Products/Ribbons';

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

const ProductsScreens = ({navigation}) => {
  const ProductsStack = createStackNavigator();

  return (
    <ProductsStack.Navigator initialRouteName="ACCOUNT">
      <ProductsStack.Screen
        name="Products"
        component={Products}
        options={() => ({animationEnabled: false, headerShown: false})}
      />
      <ProductsStack.Screen
        name="PrintedLabels"
        component={PrintedLabels}
        options={({route, navigation}) => ({
          animationEnabled: false,
            headerShown: false,
          title: '',
          leftLabel: '',
          headerStyle: styles.headerStyle,
          headerLeft: () => headerLeft('Printed Labels', navigation),
          headerRight: () => headerRight(navigation),
        })}
      />
      <ProductsStack.Screen
        name="BlankLabels"
        component={BlankLabels}
        options={({route, navigation}) => ({
          animationEnabled: false,
          title: '',
          leftLabel: '',
          headerStyle: styles.headerStyle,
          headerLeft: () => headerLeft('Blank Labels', navigation),
          headerRight: () => headerRight(navigation),
        })}
      />
      <ProductsStack.Screen
        name="Ribbons"
        component={Ribbons}
        options={({route, navigation}) => ({
          animationEnabled: false,
          title: '',
          leftLabel: '',
          headerStyle: styles.headerStyle,
          headerLeft: () => headerLeft('Ribbons', navigation),
          headerRight: () => headerRight(navigation),
        })}
      />
    </ProductsStack.Navigator>
  );
};

export default ProductsScreens;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.TEMPLATE_COLOR,
    shadowColor: Colors.GRAY,
  },
});
