import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import I18n from 'react-native-i18n';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors, Fonts, Metrics} from '../themes';
import {DividerHorizontal, DividerVertical} from './Divider';

const HorizontalDivider = () => <DividerHorizontal color="white" size="100%" />;

const VerticalDivider = () => <DividerVertical color="white" height="100%" />;

const Table = ({navigation}) => {
  const data1 = [
    {
      account: 112200,
      accounttype: 'Raw Spread',
      accounttype1: 'Raw Spread',
    },
    {
      account: 224400,
      accounttype: 'Raw Spread',
      accounttype1: 'Raw Spread',
    },
    {
      account: 996600,
      accounttype: 'Raw Spread',
      accounttype1: 'Raw Spread',
    },
    {
      account: 996600,
      accounttype: 'Raw Spread',
      accounttype1: 'Raw Spread',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.viewRenderItem}>
      <View style={styles.viewRow}>
        <HorizontalDivider />
        <Text numberOfLines={1} style={styles.textRow}>
          {item.account}
        </Text>
      </View>
      <VerticalDivider />
      <View style={styles.viewRow}>
        <HorizontalDivider />
        <Text numberOfLines={1} style={styles.textRow}>
          {item.account}
        </Text>
      </View>
      <VerticalDivider />
      <View style={styles.viewRow}>
        <HorizontalDivider />
        <Text numberOfLines={1} style={styles.textRow}>
          {item.account}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView horizontal>
      <View style={styles.flatlist}>
        <View style={{...styles.viewRenderItem, ...styles.viewRadiusTop}}>
          <View style={styles.viewRow}>
            <Text numberOfLines={1} style={styles.textRow}>
              {I18n.t('Account')}
            </Text>
          </View>
          <VerticalDivider />
          <View style={styles.viewRow}>
            <Text numberOfLines={1} style={styles.textRow}>
              {I18n.t('Account Type')}
            </Text>
          </View>
          <VerticalDivider />
          <View style={styles.viewRow}>
            <Text numberOfLines={1} style={styles.textRow}>
              {I18n.t('Details')}
            </Text>
          </View>
        </View>

        <FlatList
          scrollEnabled={false}
          data={data1}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{...styles.viewRenderItem, ...styles.viewRadiusBottom}} />
      </View>
    </ScrollView>
  );
};
export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.FLATLIST_BACKGROUND_COLOR,
  },
  flatlist: {
    marginTop: Metrics.HEIGHT * 0.03,
    flex: 1,
  },
  table: {
    flex: 1,

    marginBottom: Metrics.HEIGHT * 0.05,
  },

  viewRow: {
    flex: 1,
  },
  textRow: {
    paddingLeft: Metrics.HEIGHT * 0.01,
    paddingRight: Metrics.HEIGHT * 0.01,
    paddingTop: Metrics.HEIGHT * 0.02,
    paddingBottom: Metrics.HEIGHT * 0.02,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: Fonts.moderateScale(Fonts.size.small),
    fontFamily: Fonts.type.medium,
    width: Metrics.WIDTH * 0.3,
  },

  viewRenderItem: {
    backgroundColor: Colors.FLATLIST_BACKGROUND_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.FLATLIST_BACKGROUND_COLOR,
  },

  viewRadiusTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
  },
  viewRadiusBottom: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 10,
  },
});
