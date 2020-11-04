import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import IndustrialBarcodePrinters from './IndustrialBarcodePrinters';
import DesktopBarcodePrinters from './DesktopBarcodePrinters';
import MobileBarcodePrinters from './MobileBarcodePrinters';
import BarcodePrinterAccessories from './BarcodePrinterAccessories';
import {Colors} from '../../themes';
import I18n from "react-native-i18n";

const initialLayout = {width: Dimensions.get('window').width};

export default function Printers() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'IndustrialBarcodePrinters', title: I18n.t('Industrial Barcode Printers')},
    {key: 'DesktopBarcodePrinters', title: I18n.t('Desktop Barcode Printers')},
    {key: 'MobileBarcodePrinters', title: I18n.t('Mobile Barcode Printers')},
    {key: 'BarcodePrinterAccessories', title: I18n.t('Barcode Printer Accessories')},
  ]);

  const renderScene = SceneMap({
    IndustrialBarcodePrinters: IndustrialBarcodePrinters,
    DesktopBarcodePrinters: DesktopBarcodePrinters,
    MobileBarcodePrinters: MobileBarcodePrinters,
    BarcodePrinterAccessories: BarcodePrinterAccessories,
  });
  const renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => {
    return (
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    );
  };

  return (
    <TabView
      scrollEnabled={true}
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
    width: 150,
  },
  indicator: {
    backgroundColor: 'white',
  },
  label: {
    fontSize: 11,
    textAlign: 'center',
  },
});
