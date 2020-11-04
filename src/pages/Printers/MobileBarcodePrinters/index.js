import React, {useEffect} from 'react';
import {FlatList,ScrollView, Image, Text, View} from 'react-native';
import {desktopBarcodePrinters} from "../../data/data";
import I18n from "react-native-i18n";
import styles from "./styles";
import {Colors, Fonts, Images} from "../../../themes";
import Divider from "../../../components/Divider";

const MobileBarcodePrinters = ({navigation}) => {
    useEffect(() => {
    }, []);

    return (
        <ScrollView    showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: 'white', padding: 10}}>

                    <>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginBottom:20
                            }}>
                            <Image style={styles.imageStyle} source={Images.ep4}/>
                            <View style={{flex: 1, backgroundColor: 'transparent', marginTop: 10}}>

                                <View style={styles.cardContainer}>
                                    <Text style={{...styles.cardLeftText,color:Colors.TEMPLATE_COLOR_RED,fontSize:Fonts.moderateScale(15),textAlign:'center'}}>TOSHIBA B-EP4DL</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Printing Method")}:</Text>
                                    <Text style={styles.cardRightText}>{I18n.t("Direct Thermal")}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Resolution")}:</Text>
                                    <Text style={styles.cardRightText}>203 dpi</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Memory")}:</Text>
                                    <Text style={styles.cardRightText}>104 mm</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Print Width")}:</Text>
                                    <Text style={styles.cardRightText}>997 mm</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Print Length")}:</Text>
                                    <Text style={styles.cardRightText}>105 mm/s</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Support")}:</Text>
                                    <Text style={styles.cardRightText}>16MB S-RAM,USB,Bluetooth</Text>
                                </View>

                            </View>

                        </View>
                        <Divider/>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row-reverse'
                            }}>
                            <Image style={styles.imageStyle} source={Images.imz}/>
                            <View style={{flex: 1, backgroundColor: 'transparent', marginTop: 10}}>
                                <View style={styles.cardContainer}>
                                    <Text style={{...styles.cardLeftText,color:Colors.TEMPLATE_COLOR_RED,fontSize:Fonts.moderateScale(15),textAlign:'center'}}>ZEBRA İMZ SERIES
                                    </Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={{...styles.cardRightText,marginLeft:10,fontSize:15}}>{I18n.t("ZEBRA İMZ SERIES TEXT")}</Text>
                                </View>
                            </View>


                        </View>
                        <Divider/>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row'
                            }}>
                            <Image style={styles.imageStyle} source={Images.qln}/>
                            <View style={{flex: 1, backgroundColor: 'transparent', marginTop: 10}}>
                                <View style={styles.cardContainer}>
                                    <Text style={{...styles.cardLeftText,color:Colors.TEMPLATE_COLOR_RED,fontSize:Fonts.moderateScale(15),textAlign:'center'}}>ZEBRA QLN SERIES
                                    </Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={{...styles.cardRightText,marginLeft:10,marginBottom:15,fontSize:15}}>{I18n.t("ZEBRA QLN SERIES TEXT")}</Text>
                                </View>
                            </View>


                        </View>

                    </>


        </ScrollView>
    );
};

export default MobileBarcodePrinters;
