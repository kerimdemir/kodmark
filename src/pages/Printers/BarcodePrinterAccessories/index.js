import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import I18n from "react-native-i18n";
import styles from "./styles";
import {Colors, Fonts, Images} from "../../../themes";
import Divider from "../../../components/Divider";

const BarcodePrinterAccessories = ({navigation}) => {
    useEffect(() => {
    }, []);

    return (
        <ScrollView    showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: 'white', marginTop: 10}}>

            <>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginBottom: 20
                    }}>
                    <Image style={styles.imageStyle} source={Images.godex}/>
                    <View style={{flex: 1, backgroundColor: 'transparent', marginTop: 10}}>

                        <View style={styles.cardContainer}>
                            <Text style={{
                                ...styles.cardLeftText,
                                color: Colors.TEMPLATE_COLOR_RED,
                                fontSize: Fonts.moderateScale(15),
                                textAlign: 'center'
                            }}>LABEL WINDER GODEX T-10</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardLeftText}>{I18n.t("LABEL WIDTH")}:</Text>
                            <Text style={styles.cardRightText}>25,4 MM-120 MM</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardLeftText}>{I18n.t("ROLL OUTER DIAMETER")}:</Text>
                            <Text style={styles.cardRightText}>203 MM (MAX.)</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardLeftText}>{I18n.t("WINDING SPEED")}:</Text>
                            <Text style={styles.cardRightText}>304.8 MM / SECOND (MAX.)</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardLeftText}>{I18n.t("WINDING DIRECTION")}:</Text>
                            <Text style={styles.cardRightText}>INNER WINDING OR OUTER WINDING</Text>
                        </View>
                    </View>
                </View>
                <Divider/>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row-reverse',
                        marginBottom: 20,
                        marginRight: 20,
                    }}>
                    <Image style={styles.imageStyle} source={Images.apf}/>
                    <View style={{flex: 1, backgroundColor: 'transparent', marginTop: 10}}>

                        <View style={styles.cardContainer}>
                            <Text style={{
                                ...styles.cardLeftText,
                                color: Colors.TEMPLATE_COLOR_RED,
                                fontSize: Fonts.moderateScale(15),
                                textAlign: 'center'
                            }}>LABEL APPLICATORTOWA APN-30</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("FEATURES")}</Text>

                        </View>
                        <View style={styles.cardContainer}>

                            <Text style={styles.cardRightText}>{I18n.t("PATENTED LABEL SENSOR")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("LABEL JAM PROTECTION")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>10-30 MM {I18n.t("LABEL WIDTH")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("ADJUSTABLE HEAD")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("EASY TO GRIP")}</Text>
                        </View>
                    </View>
                </View>
                <Divider/>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row-reverse',
                        marginBottom: 20,
                        marginRight: 20,
                    }}>
                    <Image style={styles.imageStyle} source={Images.apn}/>
                    <View style={{flex: 1, backgroundColor: 'transparent', marginTop: 10}}>

                        <View style={styles.cardContainer}>
                            <Text style={{
                                ...styles.cardLeftText,
                                color: Colors.TEMPLATE_COLOR_RED,
                                fontSize: Fonts.moderateScale(15),
                                textAlign: 'center'
                            }}>LABEL APPLICATORTOWA APN-100</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("FEATURES")}</Text>

                        </View>
                        <View style={styles.cardContainer}>

                            <Text style={styles.cardRightText}>{I18n.t("PATENTED LABEL SENSOR")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("LABEL JAM PROTECTION")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>100 MM {I18n.t("LABEL WIDTH")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("ADJUSTABLE HEAD")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("EASY TO GRIP")}</Text>
                        </View>
                    </View>
                </View>
                <Divider/>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginBottom: 20,
                        marginRight: 20,
                    }}>
                    <Image style={styles.imageStyle} source={Images.towa}/>
                    <View style={{flex: 1, backgroundColor: 'transparent', marginTop: 10}}>

                        <View style={styles.cardContainer}>
                            <Text style={{
                                ...styles.cardLeftText,
                                color: Colors.TEMPLATE_COLOR_RED,
                                fontSize: Fonts.moderateScale(15),
                                textAlign: 'center'
                            }}>LABEL APPLICATORTOWA APF-60</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("FEATURES")}</Text>

                        </View>
                        <View style={styles.cardContainer}>

                            <Text style={styles.cardRightText}>{I18n.t("PATENTED LABEL SENSOR")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("SHAPED EDGE SUPPORT")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("LABEL JAM PROTECTION")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>60 MM {I18n.t("LABEL WIDTH")}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardRightText}>{I18n.t("ADJUSTABLE HEAD")}</Text>
                        </View>
                    </View>
                </View>

            </>


        </ScrollView>
    );
};

export default BarcodePrinterAccessories;
