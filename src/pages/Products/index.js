import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import {Colors, Metrics} from '../../themes';
import PrintedLabels from './PrintedLabels';
import BlankLabels from './BlankLabels';
import Ribbons from './Ribbons';
import I18n from "react-native-i18n";

const initialLayout = {width: Dimensions.get('window').width};

export default function Products() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'PrintedLabels', title: I18n.t('Printed Labels')},
    {key: 'BlankLabels', title: I18n.t('Blank Labels')},
    {key: 'Ribbons', title: I18n.t('Ribbons')},
  ]);

  const renderScene = SceneMap({
    PrintedLabels: PrintedLabels,
    BlankLabels: BlankLabels,
    Ribbons: Ribbons,
  });
  const renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    );
  };

  return (
    <TabView
      scrollEnabled
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: Colors.TEMPLATE_COLOR_RED,
  },
  tab: {
    width: Metrics.WIDTH/3,
  },
  indicator: {
    backgroundColor: 'white',
  },
  label: {
    fontSize: 11,
    textAlign: 'center',
  },
});
