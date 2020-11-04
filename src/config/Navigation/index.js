import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabBar from './tab-bar';
import CorporateScreens from './CorporateScreens';
import ProductsScreens from './ProductsScreens';
import PrintersScreens from './PrintersScreens';
import BreadersScreens from './BreadersScreens';
import Home from '../../pages/Home';
import ContactUs from '../../pages/ContactUs';
import {Colors, Fonts, Images, Metrics} from '../../themes';
import HomeScreens from "./HomeScreens";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import PrintedLabels from "../../pages/Products/PrintedLabels";
import BlankLabels from "../../pages/Products/BlankLabels";
import Ribbons from "../../pages/Products/Ribbons";
import IndustrialBarcodePrinters from "../../pages/Printers/IndustrialBarcodePrinters";
import BarcodeReaders from "../../pages/BarcodeReaders";
import DesktopBarcodePrinters from "../../pages/Printers/DesktopBarcodePrinters";
import MobileBarcodePrinters from "../../pages/Printers/MobileBarcodePrinters";
import BarcodePrinterAccessories from "../../pages/Printers/BarcodePrinterAccessories";
import RNBootSplash from "react-native-bootsplash";

const Navigation = () => {
    // Stack Navigators
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();
    const HomeStack = createStackNavigator();
    useEffect(() => {
    }, []);

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
    const headerBack = (navigation, name) => (
        <TouchableOpacity style={{
            marginLeft: 10, alignItems: 'center', flexDirection: 'row'
        }} onPress={() => navigation.goBack()}>

            <Ionicons
                style={styles.icon}
                color={'black'}
                name={'md-arrow-back'}
                size={30}
            />
            <Text style={{marginLeft: 15, fontFamily: Fonts.type.semiBold}}> {name} </Text>
        </TouchableOpacity>
    );
    const headerRight = (navigation) => (
        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={{marginRight: Metrics.WIDTH * 0.01}}>
            <FontAwesome5Icon
                style={styles.icon}
                color={'black'}
                name={'user-edit'}
                size={22}
            />
        </TouchableOpacity>
    );

    function AppTab() {
        return (
            <Tab.Navigator
                initialRouteName="HOME"
                tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen name="HOME" component={HomeScreens}/>
                <Tab.Screen name="CORPORATE" component={CorporateScreens}/>
                <Tab.Screen name="PRODUCTS" component={ProductsScreens}/>
                <Tab.Screen name="PRINTERS" component={PrintersScreens}/>
                <Tab.Screen name="READERS" component={BreadersScreens}/>
            </Tab.Navigator>
        );
    }

    // Splash Screen Hide
    RNBootSplash.hide({duration: 500});


    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen
                        name="Home"
                        component={AppTab}
                        options={({route, navigation}) => ({
                            headerShown: true,
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerLeft(navigation)),
                            headerRight: () => (headerRight(navigation)),
                        })}
                    />
                    <Stack.Screen
                        name="ContactUs"
                        component={ContactUs}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerRight: () => (
                                <Image
                                    source={Images.kodmark_logo1}
                                    style={{
                                        width: 120,
                                        height: 120,
                                        marginRight: 15,
                                        resizeMode: 'contain',
                                    }}
                                />
                            ),
                            headerLeft: () => (
                                <TouchableOpacity style={{
                                    marginLeft: 10,
                                }} onPress={() => navigation.goBack()}>
                                    <Ionicons
                                        style={styles.icon}
                                        color={'black'}
                                        name={'md-arrow-back'}
                                        size={30}
                                    />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="PrintedLabels"
                        component={PrintedLabels}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            headerShown: true,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerBack(navigation, "Printed Labels")),
                            headerRight: () => <View/>,
                        })}
                    />
                    <Stack.Screen
                        name="BlankLabels"
                        component={BlankLabels}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerBack(navigation, "BlankLabels")),
                            headerRight: () => headerRight(navigation),
                        })}
                    />
                    <Stack.Screen
                        name="Ribbons"
                        component={Ribbons}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerBack(navigation, "Ribbons")),
                            headerRight: () => headerRight(navigation),
                        })}
                    />
                    <Stack.Screen
                        name="IndustrialBarcodePrinters"
                        component={IndustrialBarcodePrinters}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerBack(navigation, "Industrial Barcode Printers")),
                            headerRight: () => headerRight(navigation),
                        })}
                    />
                    <Stack.Screen
                        name="BarcodeReaders"
                        component={BarcodeReaders}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerBack(navigation, "Barcode Readers")),
                            headerRight: () => headerRight(navigation),
                        })}
                    />
                    <Stack.Screen
                        name="DesktopBarcodePrinters"
                        component={DesktopBarcodePrinters}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerBack(navigation, "Desktop Barcode Printers")),
                            headerRight: () => headerRight(navigation),
                        })}
                    />
                    <Stack.Screen
                        name="MobileBarcodePrinters"
                        component={MobileBarcodePrinters}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerBack(navigation, "Mobile Barcode Printers")),
                            headerRight: () => headerRight(navigation),
                        })}
                    />
                    <Stack.Screen
                        name="BarcodePrinterAccessories"
                        component={BarcodePrinterAccessories}
                        options={({route, navigation}) => ({
                            animationEnabled: false,
                            title: '',
                            leftLabel: '',
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (headerBack(navigation, "Barcode Printer Accessories")),
                            headerRight: () => headerRight(navigation),
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default Navigation;

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.LITEGRAY,
        shadowColor: Colors.GRAY,

    },
    icon: {marginRight: 15},
});
