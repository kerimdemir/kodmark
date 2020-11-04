import React, {useEffect} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {desktopBarcodePrinters} from "../../data/data";
import I18n from "react-native-i18n";
import styles from "./styles";
import {Colors, Fonts, Images} from "../../../themes";
import Divider from "../../../components/Divider";

const DesktopBarcodePrinters = ({navigation}) => {
    useEffect(() => {
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: 'white', marginTop: 10}}>

            <FlatList    showsVerticalScrollIndicator={false}
                data={desktopBarcodePrinters}
                renderItem={({item,index}) => (
                    <>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: index%2==0?'row':'row-reverse',

                            }}>


                            <Image style={styles.imageStyle} source={item.image}/>
                            <View style={{flex: 1, backgroundColor: 'transparent', marginTop: 10}}>

                                <View style={styles.cardContainer}>
                                    <Text style={{...styles.cardLeftText,color:Colors.TEMPLATE_COLOR_RED,fontSize:Fonts.moderateScale(15),textAlign:'center'}}>{item.name}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Printing Method")}:</Text>
                                    <Text style={styles.cardRightText}>{item.PrintingMethod}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Resolution")}:</Text>
                                    <Text style={styles.cardRightText}>{item.Resolution}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Memory")}:</Text>
                                    <Text style={styles.cardRightText}>{item.Memory}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Print Width")}:</Text>
                                    <Text style={styles.cardRightText}>{item.PrintWidth}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Print Length")}:</Text>
                                    <Text style={styles.cardRightText}>{item.PrintLength}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Print Speed")}:</Text>
                                    <Text style={styles.cardRightText}>{item.PrintSpeed}</Text>
                                </View>
                                {item.ProgrammingLanguages&&
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Programming Languages")}:</Text>
                                    <Text style={styles.cardRightText}>{item.ProgrammingLanguages}</Text>
                                </View>}
                                {item.CommunicationPort&&
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardLeftText}>{I18n.t("Communication Port")}:</Text>
                                    <Text style={styles.cardRightText}>{item.CommunicationPort}</Text>
                                </View>}


                            </View>

                        </View>
                        <Divider/>
                    </>

                )}
                //Setting the number of column
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    );
};

export default DesktopBarcodePrinters;
