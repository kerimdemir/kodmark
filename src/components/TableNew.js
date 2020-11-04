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

const Table = ({navigation, headers, rows}) => (
  <ScrollView horizontal>
    <View style={styles.flatlist}>
      <View style={{...styles.viewRenderItem, ...styles.viewRadiusTop}}>
        {headers.map((data, index) => (
          <React.Fragment key={index}>
            <Text key={index} numberOfLines={1} style={styles.textRowHeader}>
              {I18n.t(data.name)}
            </Text>
            <VerticalDivider />
          </React.Fragment>
        ))}
      </View>

      <View style={{flexDirection: 'column'}}>
        {headers.map((data, dataIndex) => (
          <View key={dataIndex} style={{flexDirection: 'row'}}>
            {rows.map((obj, objIndex) => (
              <View key={objIndex} style={styles.viewRenderItem}>
                <View style={styles.viewRow}>
                  <HorizontalDivider />
                  <Text numberOfLines={1} style={styles.textRow}>
                    {obj[data.reference_key || data.name]}
                  </Text>
                </View>
                <VerticalDivider />
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  </ScrollView>
);
export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.FLATLIST_BACKGROUND_COLOR,
  },
  flatlist: {
    marginTop: Metrics.HEIGHT * 0.04,
    flex: 1,
    backgroundColor: Colors.FLATLIST_BACKGROUND_COLOR,
  },
  table: {
    flex: 1,

    marginBottom: Metrics.HEIGHT * 0.05,
  },

  viewRow: {
    flex: 1,
    flexDirection: 'column',
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
    width: Metrics.WIDTH * 0.5,
  },
  textRowHeader: {
    paddingLeft: Metrics.HEIGHT * 0.01,
    paddingRight: Metrics.HEIGHT * 0.01,
    paddingTop: Metrics.HEIGHT * 0.02,
    paddingBottom: Metrics.HEIGHT * 0.02,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: Fonts.moderateScale(Fonts.size.small),
    fontFamily: Fonts.type.bold,
    width: Metrics.WIDTH * 0.5,
  },

  viewRenderItem: {
    backgroundColor: Colors.FLATLIST_BACKGROUND_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
