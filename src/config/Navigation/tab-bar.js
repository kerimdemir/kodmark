import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../themes';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.viewContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            {isFocused ? (
              <Text style={styles.textActive}>{label}</Text>
            ) : (

              <Text style={styles.textPassive}>{label}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.BOTTOM_TAB_COLOR,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
  textActive: {
    textDecorationLine:'underline',
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.black,
    color: Colors.BLACK,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  textPassive: {
    fontSize: Fonts.moderateScale(8),
    fontFamily: Fonts.type.semiBold,
    color: 'black',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});

export default MyTabBar;
