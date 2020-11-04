import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image,Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, Fonts, Images, Metrics} from '../../themes';
import Home from "../../pages/Home";

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

const HomeScreens = ({navigation}) => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false}}>
            <HomeStack.Screen
                name="Home"
                component={Home}
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

        </HomeStack.Navigator>
    );
};

export default HomeScreens;

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.LITEGRAY,
        shadowColor: Colors.GRAY,

    },
});
