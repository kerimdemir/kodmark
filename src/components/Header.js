import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import I18n from 'react-native-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Fonts, Metrics} from '../themes';

const Header = ({navigation, callback}) => {
  return (
    <View style={styles.viewHeader}>
      <View style={styles.viewHeaderContainer}>
        <View style={styles.viewHeaderTabContainer}>
          <TouchableOpacity
            onPress={() => callback('0')}
            style={styles.viewTab}>
            <MaterialCommunityIcons
              name="bank"
              size={Fonts.moderateScale(30)}
            />
            <Text numberOfLines={2} style={styles.textTab}>
              {I18n.t('About Us')}
              {'\n'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewTab}
            onPress={() => callback('1')}>
            <MaterialCommunityIcons
              name="account-tie"
              size={Fonts.moderateScale(30)}
            />
            <Text numberOfLines={2} style={styles.textTab}>
              {I18n.t('Vision, Mission and Our Values')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewTab}
            onPress={() => callback('2')}>
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={Fonts.moderateScale(30)}
            />
            <Text numberOfLines={2} style={styles.textTab}>
              {I18n.t('Catalog')}
              {'\n'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewHeader: {
    height: Metrics.HEIGHT * 0.18,
    backgroundColor: 'white',
  },
  viewHeaderContainer: {
    height: Metrics.HEIGHT * 0.09,
    backgroundColor: Colors.FLATLIST_BACKGROUND_COLOR,
  },
  viewHeaderSubContainer: {
    flex: 1,
    flexDirection: 'row',

    paddingTop: Metrics.HEIGHT * 0.04,
    paddingLeft: Metrics.WIDTH * 0.04,
    paddingBottom: Metrics.HEIGHT * 0.04,
    paddingRight: Metrics.WIDTH * 0.04,

    backgroundColor: Colors.TEMPLATE_COLOR,
  },
  viewHeaderSubTitleContainer: {
    flexDirection: 'row',
  },

  textHeaderTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.moderateScale(Fonts.size.medium),

    color: Colors.BLACK,
  },
  textHeaderSubTitle: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.moderateScale(Fonts.size.small),
    color: Colors.DARKGRAY,
  },
  textHeaderSubTitleStatusText: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.moderateScale(Fonts.size.small),
    color: Colors.GREEN,
    marginLeft: Metrics.WIDTH * 0.007,
  },

  viewHeaderTabContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: Colors.BOTTOM_TAB_COLOR,
    flexDirection: 'row',
    marginTop: Metrics.HEIGHT * 0.02,
    height: Metrics.HEIGHT * 0.13,
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    shadowColor: Colors.GRAY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  viewTab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 15,
  },

  textTab: {
    textAlign: 'center',
    marginTop: Metrics.WIDTH * 0.01,
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.regular,
  },

  textVersion: {
    position: 'absolute',
    right: 20,
    bottom: 0,
    fontSize: Fonts.moderateScale(Fonts.size.tiny),
  },
});
export default Header;
